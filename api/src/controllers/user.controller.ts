import { RequestHandler } from 'express';

import User from '../models/User';
import { verifyToken } from '../utils/tokenManagment';

export const getFavs: RequestHandler = async (req, res) => {
    try {
        const currentUser: any = verifyToken(req.token);

        const { username } = currentUser;
        const user = await User.findOne({ username });

        return res.status(200).json({ userFavs: user.favs });
    } catch (err) {
        return res.status(404).json({ error: err.message });
    }
};

export const postFav: RequestHandler = async (req, res) => {
    try {
        const currentUser: any = verifyToken(req.token);

        const { id } = req.params;
        const { username } = currentUser;
        const user = await User.findOne({ username });

        const alreadyExist = user.favs.some((favId: string) => favId === id);

        if (!alreadyExist) {
            user.favs.push(id);
            await user.save();
        }

        const newFav = user.favs;

        return res.status(201).json({ newFav });
    } catch (err) {
        return res.status(404).json({ error: err.message });
    }
};

export const deleteFav: RequestHandler = async (req, res) => {
    try {
        const currentUser: any = verifyToken(req.token);

        const { id } = req.params;
        const { username } = currentUser;
        let user = await User.findOne({ username });

        const alreadyExist = user.favs.find((favId: string) => favId === id);

        if (alreadyExist) {
            user.favs = user.favs.filter((favId: string) => favId !== id);
            await user.save();

            const favDeleted = user.favs;

            return res.status(200).json({ favDeleted });
        } else return res.sendStatus(404);
    } catch (err) {
        return res.status(404).json({ error: err.message });
    }
};
