import { Router } from 'express';

import * as userController from '../controllers/user.controller';
import checkAuth from '../utils/checkAuth';

const router = Router();

router.get('/', checkAuth, userController.getFavs);

router.post('/:id', checkAuth, userController.postFav);

router.delete('/:id', checkAuth, userController.deleteFav);

export default router;
