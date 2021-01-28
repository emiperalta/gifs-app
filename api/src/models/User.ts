import { Schema, model } from 'mongoose';

import { UserInterface } from '../utils/types';

const UserSchema: Schema = new Schema(
    {
        email: { type: String, required: true },
        username: { type: String, required: true },
        password: { type: String, required: true },
        confirmed: { type: Boolean, default: false },
        favs: [String],
    },
    {
        versionKey: false,
    }
);

export default model<UserInterface>('User', UserSchema);
