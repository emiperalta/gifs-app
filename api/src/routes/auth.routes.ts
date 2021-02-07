import { Router } from 'express';

import * as authController from '../controllers/auth.controller';

const router = Router();

router.post('/login', authController.login);

router.post('/register', authController.register);

router.get('/confirmation/:token', authController.confirmAccount);

router.post('/forgot', authController.forgotPassword);

router.post('/reset/:token', authController.resetPassword);

export default router;
