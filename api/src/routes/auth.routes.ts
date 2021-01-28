import { Router } from 'express';

import * as authController from '../controllers/auth.controller';

const router = Router();

router.get('/confirmation/:token', authController.confirmAccount);

router.post('/login', authController.postLogin);

router.post('/register', authController.postRegister);

export default router;
