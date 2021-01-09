import { Document } from 'mongoose';

export interface UserInterface extends Document {
    username: string;
    password: string;
}

export interface FavInterface extends Document {
    favs: [];
}
