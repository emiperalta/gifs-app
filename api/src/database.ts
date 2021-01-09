import mongoose, { ConnectionOptions } from 'mongoose';

import 'dotenv/config';

const MONGODB_URI = process.env.MONGODB_URI!;

const mongooseOptions: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
};

(async () => {
    await mongoose
        .connect(MONGODB_URI, mongooseOptions)
        .then(() => console.log('DB Connected'))
        .catch(err => console.error(err));
})();
