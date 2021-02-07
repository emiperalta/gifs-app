import 'dotenv/config';
import { json, RequestHandler } from 'express';
import { compare, hash } from 'bcryptjs';

import User from '../models/User';
import {
    generateToken,
    verifyToken,
    sendEmailWithToken,
} from '../utils/tokenManagment';

const { API_URL, APP_URL } = process.env;

export const login: RequestHandler = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(403).json({ error: 'User not found' });
        }

        if (!user.confirmed) {
            return res.status(403).json({ error: 'User not confirmed' });
        }

        const matchPassword = await compare(password, user.password);
        if (!matchPassword)
            return res.status(403).json({
                error: 'The username or password are incorrect',
            });

        const token = generateToken(user);

        return res.status(201).json({ user, token });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};

export const register: RequestHandler = async (req, res) => {
    try {
        const { email, username, password } = req.body;

        const userAlreadyExist = await User.findOne({ username });
        const emailAlreadyExist = await User.findOne({ email });

        if (userAlreadyExist || emailAlreadyExist)
            return res.status(409).json({ error: 'User already registered' });
        else {
            const hashedPassword = await hash(password, 10);

            const user = new User({
                email,
                username,
                password: hashedPassword,
            });

            const newUser = await user.save();

            sendEmailWithToken(
                newUser,
                newUser.email,
                `${API_URL}/confirmation`,
                'confirm your email'
            );

            return res.status(201).json({ newUser });
        }
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};

export const confirmAccount: RequestHandler = async (req, res) => {
    try {
        const verified: any = verifyToken(req.params.token);

        await User.findByIdAndUpdate(verified.user, { confirmed: true });

        return res.redirect(`${APP_URL}/login`);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};

export const resetPassword: RequestHandler = async (req, res) => {
    try {
        const { token } = req.params;
        console.log(req.params);
        const { password } = req.body;
        console.log(req.body);

        const verified: any = verifyToken(token);

        const newPassword = await hash(password, 10);
        await User.findByIdAndUpdate(verified.user, { password: newPassword });

        return res.status(200).json({ msg: 'now you can login with new password' });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};

export const forgotPassword: RequestHandler = async (req, res) => {
    try {
        const { email } = req.body;

        const userExists = await User.findOne({ email });
        if (!userExists)
            return res.status(403).json({ error: 'User does not exist' });

        sendEmailWithToken(
            userExists,
            userExists.email,
            `${APP_URL}/reset`,
            'reset your password'
        );

        return res.status(200).json({ msg: 'email sent' });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};
