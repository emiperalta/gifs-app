import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const generateToken = (user: any) => {
    return jwt.sign({ username: user.username }, process.env.JWT_KEY!, {
        expiresIn: '1h',
    });
};

export const verifyToken = (token: string) => {
    return jwt.verify(token, process.env.JWT_KEY!);
};
