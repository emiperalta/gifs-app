import { RequestHandler } from 'express';
import { compare, hash } from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User';
import { generateToken, verifyToken } from '../utils/tokenManagment';
import { transporter } from '../utils/transporter';

export const postLogin: RequestHandler = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(403).json({ error: 'User not found' });
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

export const postRegister: RequestHandler = async (req, res) => {
    try {
        const { email, username, password } = req.body;

        const userAlreadyExist = await User.find({ username });
        const emailAlreadyExist = await User.find({ email });

        if (userAlreadyExist != '' || emailAlreadyExist != '')
            return res.status(409).json({ error: 'User already registered' });
        else {
            const hashedPassword = await hash(password, 10);

            const user = new User({
                email,
                username,
                password: hashedPassword,
            });

            const newUser = await user.save();

            const token = generateToken(newUser);
            const url = `http://localhost:5000/api/confirmation/${token}`;

            await transporter.sendMail({
                to: email,
                subject: 'Confirm Email',
                html: `Please click this link to confirm your email: <a href="${url}">${url}</a>`,
            });

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

        // TODO: redirect to login page but in client side
        return res.redirect('/api/login');
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};
