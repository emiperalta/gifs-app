import { RequestHandler } from 'express';

declare global {
    namespace Express {
        interface Request {
            token: string;
        }
    }
}

const checkAuth: RequestHandler = async (req, res, next) => {
    const bearerHeader = req.headers.authorization;

    if (typeof bearerHeader !== 'undefined') {
        try {
            const token = bearerHeader.split(' ')[1];

            req.token = token;

            await next();
        } catch (err) {
            res.sendStatus(403);
        }
    } else res.status(404).json({ error: 'Authorization header must be provided' });
};

export default checkAuth;
