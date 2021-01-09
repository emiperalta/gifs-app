import { Router } from 'express';

import * as userController from '../controllers/user.controller';

const router = Router();

router.get('/', userController.getFavs);

router.post('/:id', userController.postFav);

router.delete('/:id', userController.deleteFav);

export default router;
