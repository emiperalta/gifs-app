import { Document } from 'mongoose';

export interface UserInterface extends Document {
    email: string;
    username: string;
    password: string;
    confirmed: boolean;
    favs: [string];
}
