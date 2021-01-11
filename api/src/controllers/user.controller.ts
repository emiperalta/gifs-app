import { RequestHandler } from 'express';

import { favs } from '../utils/favs';
import { verifyToken } from '../utils/tokenManagment';

export const getFavs: RequestHandler = async (req, res) => {
    try {
        const currentUser: any = verifyToken(req.token);

        const { username } = currentUser;

        const userFavs = favs[username];

        return res.status(200).json({ userFavs });
    } catch (err) {
        return res.status(404).json({ error: err.message });
    }
};

export const postFav: RequestHandler = (req, res) => {
    try {
        const currentUser: any = verifyToken(req.token);

        const { id } = req.params;
        const { username } = currentUser;

        const alreadyExist = favs[username].find((favId: string) => favId === id);

        if (!alreadyExist) {
            favs[username].push(id);
        }

        console.log({
            alreadyExist,
            favs: favs[username],
            username,
        });

        const newFav = favs[username];

        return res.status(201).json({ newFav });
    } catch (err) {
        return res.status(404).json({ error: err.message });
    }
};

export const deleteFav: RequestHandler = (req, res) => {
    try {
        const currentUser: any = verifyToken(req.token);

        const { id } = req.params;
        const { username } = currentUser;

        const alreadyExist = favs[username].find((favId: string) => favId === id);

        if (alreadyExist) {
            favs[username] = favs[username].filter((favId: string) => favId !== id);

            const deletedFav = favs[username];

            return res.status(200).json({ deletedFav });
        } else return res.sendStatus(404);
    } catch (err) {
        return res.status(404).json({ error: err.message });
    }
};
