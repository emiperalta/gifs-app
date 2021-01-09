import { RequestHandler } from 'express';

import User from '../models/User';
import Fav from '../models/Fav';

export const getFavs: RequestHandler = async (req, res) => {
    try {
        const userFavs = await Fav.find();

        // TODO: decide how to manage favs

        res.status(200).json(userFavs);
    } catch (err) {
        res.status(404).json({ error: err.msg });
    }
};

export const postFav: RequestHandler = (req, res) => {
    try {
        res.json('Working OK!!! 😃');
    } catch (err) {
        res.status(404).json({ error: err.msg });
    }
};

export const deleteFav: RequestHandler = (req, res) => {
    try {
        res.json('Working OK!!! 😃');
    } catch (err) {
        res.status(404).json({ error: err.msg });
    }
};
