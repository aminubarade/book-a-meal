import MealController from '../controllers/mealController';
import MenuController from '../controllers/menuController';
import orderController from '../controllers/orderController';
import userController from '../controllers/userController';
import authMiddleware from '../middlewares/authentications';
import validationMiddleware from '../middlewares/validations';

const routes = (app) => {

    //Meals Routes
    app.post('/api/v1/meals',
        validationMiddleware.postMeal, authMiddleware.verifyToken, authMiddleware.isCaterer,
        MealController.postMeal
    );
    app.get('/api/v1/meals',
        authMiddleware.verifyToken, authMiddleware.isCaterer,
        MealController.getMeals
    );
    app.put('/api/v1/meals/:id',
        validationMiddleware.putMeal, authMiddleware.verifyToken, authMiddleware.isCaterer,
        MealController.putMeal
    );
    app.delete('/api/v1/meals/:id',
        authMiddleware.verifyToken, authMiddleware.isCaterer,
        MealController.deleteMeal
    );

    //Menu Routes
    app.post('/api/v1/menu',
        validationMiddleware.postMenu, authMiddleware.verifyToken, authMiddleware.isCaterer,
        MenuController.postMenu
    );
    app.get('/api/v1/menu',
        authMiddleware.verifyToken, MenuController.getMenu
    );

    //Orders Routes
    app.post('/api/v1/orders',
        validationMiddleware.postOrder, authMiddleware.verifyToken,
        orderController.postOrder
    );
    app.get('/api/v1/orders',
        authMiddleware.verifyToken, authMiddleware.isCaterer,
        orderController.getOrders
    );
    app.put('/api/v1/orders:id',
        validationMiddleware.putMeal, authMiddleware.verifyToken,
        orderController.putOrder
    );

    //User Routes
    app.post('/api/v1/auth/signup',
        validationMiddleware.signup,
        userController.signup
    );
    app.post('/api/v1/auth/login',
        validationMiddleware.login,
        userController.login
    )
};

export default routes;
