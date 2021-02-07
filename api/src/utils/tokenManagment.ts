import jwt from 'jsonwebtoken';
import 'dotenv/config';

import { transporter } from '../utils/transporter';

export const generateToken = (user: any) => {
    return jwt.sign(
        { user: user._id, username: user.username },
        process.env.JWT_KEY!,
        {
            expiresIn: '1h',
        }
    );
};

// send email asynchronously
export const sendEmailWithToken = (
    user: any,
    email: string,
    path: string,
    subject: string
) => {
    return jwt.sign(
        { user: user._id, username: user.username },
        process.env.JWT_KEY!,
        {
            expiresIn: '1h',
        },
        (err, token) => {
            const url = `${path}/${token}`;

            transporter.sendMail({
                to: email,
                subject: `${subject}`,
                html: `Please click this link to ${subject}: <a href="${url}">CLICK ME</a>`,
            });
        }
    );
};

export const verifyToken = (token: string) => {
    return jwt.verify(token, process.env.JWT_KEY!);
};
