import {Router} from 'express';
import imageRouter from './imageRouter.js';

const router = new Router();

router.use('/images', imageRouter);

export default router;
