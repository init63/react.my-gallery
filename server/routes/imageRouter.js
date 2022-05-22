import {Router} from 'express';
import imageController from '../controllers/imageController.js';

const router = new Router();

router.get('/', imageController.getAll);
router.post('/add', imageController.add);
router.put('/edit-order', imageController.editOrder);
router.put('/edit-decription', imageController.editDescription);

export default router;
