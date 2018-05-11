import OrderController from '../controllers/orderController';
import authMiddleware from '../middlewares/authentications';
import validationMiddleware from '../middlewares/validations';

const orderRoutes = (router) => {
    router.route('/orders')
        .post(
            validationMiddleware.postOrder,authMiddleware.verifyToken,
            OrderController.postOrder
        )
        .get(
            authMiddleware.verifyToken, authMiddleware.isCaterer,
            OrderController.getOrders
        );

    router.route('/orders/:id')
        .put(
            validationMiddleware.putMeal,authMiddleware.verifyToken,
            OrderController.putOrder
        );
};

export default orderRoutes;