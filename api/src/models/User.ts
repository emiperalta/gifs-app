import { Schema, model } from 'mongoose';

import { UserInterface } from '../utils/types';

const UserSchema: Schema = new Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        favs: [String],
    },
    {
        versionKey: false,
    }
);

export default model<UserInterface>('User', UserSchema);
