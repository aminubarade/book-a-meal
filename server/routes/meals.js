import MealController from '../controllers/mealController';
import authMiddleware from '../middlewares/authentications';
import validationMiddleware from '../middlewares/validations';

console.log(authMiddleware, '---------', MealController)
const mealRoutes = (router) => {
    router.route('/meals')
        .post(
            validationMiddleware.postMeal,authMiddleware.verifyToken, authMiddleware.isCaterer,
            MealController.postMeal
        )
        .get(
            authMiddleware.verifyToken, authMiddleware.isCaterer,
            MealController.getMeals
        );

    router.route('/meals/:id')
        .put(
            validationMiddleware.putMeal,authMiddleware.verifyToken, authMiddleware.isCaterer,
            MealController.putMeal
        )
        .delete(
            authMiddleware.verifyToken, authMiddleware.isCaterer,
            MealController.deleteMeal
        );
};

export default mealRoutes;
