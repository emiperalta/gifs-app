import { RequestHandler } from 'express';
import { compare, hash } from 'bcryptjs';
import jwt from 'jsonwebtoken';

import 'dotenv/config';

import User from '../models/User';

export const postLogin: RequestHandler = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.find({ username });

        if (!user) {
            res.status(403).json({ error: 'User not found' });
        } else if (!compare(password, user.password)) {
            res.status(403).json({ error: 'User or password incorrect' });
        }

        const token = jwt.sign({ user: user.username }, process.env.JWT_KEY!, {
            expiresIn: '1h',
        });

        res.status(201).json({ token });
    } catch (err) {
        res.status(400).json({ error: err.msg });
    }
};

export const postRegister: RequestHandler = (req, res) => {
    try {
        const { username, password } = req.body;

        // TODO: finish register

        res.status(201).json();
    } catch (err) {
        res.status(400).json({ error: err.msg });
    }
};
