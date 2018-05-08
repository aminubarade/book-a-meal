import express from 'express';
import menuController from '../controllers/menuController';

const router = express.Router();

router.get('/', menuController.getMenu);

router.post('/', menuController.postMenu);

router.put('/:id', menuController.putMenu);

router.delete('/:id', menuController.deleteMenu);


export default router;