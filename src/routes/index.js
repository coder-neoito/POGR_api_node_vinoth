import { Router } from 'express';
import gameRouter from './game.js';
import userRouter from './user.js';

const router = Router();
router.use('/user', userRouter);
router.use('/game', gameRouter);
export default router;