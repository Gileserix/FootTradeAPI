import { Router } from 'express';
import { middlewareController, errorController } from '../controllers/index.js';

const router = Router();

router.get('/middleware', middlewareController);
router.get('/error', errorController);

export default router;