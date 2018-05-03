import express from 'express';
import orderController from '../controllers/orderController';

const router = express.Router();

router.get('/', orderController.getOrders);

router.post('/', orderController.postOrder);

router.put('/:id', orderController.putOrder);



export default router;