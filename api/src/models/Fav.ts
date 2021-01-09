import { Schema, model } from 'mongoose';

import { FavInterface } from '../utils/types';

const FavSchema: Schema = new Schema(
    {
        favs: [String],
    },
    {
        versionKey: false,
    }
);

export default model<FavInterface>('Fav', FavSchema);
