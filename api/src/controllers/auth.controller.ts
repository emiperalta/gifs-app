import { RequestHandler } from 'express';
import { compare, hash } from 'bcryptjs';

import User from '../models/User';
import { generateToken } from '../utils/tokenManagment';
import { favs } from '../utils/favs';

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
        const { username, password } = req.body;

        const userAlreadyExist = await User.find({ username });

        if (userAlreadyExist != '')
            return res.status(409).json({ error: 'User already registered' });
        else {
            const hashedPassword = await hash(password, 10);

            const user = new User({
                username,
                password: hashedPassword,
            });

            favs[username] = []; // to allow save user favs

            const newUser = await user.save();

            const token = generateToken(newUser);

            return res.status(201).json({ newUser, token });
        }
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};
