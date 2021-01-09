import 'dotenv/config';
import './database';

import app from './app';

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running ok at port ${PORT}`));
