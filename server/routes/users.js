import UserController from '../controllers/userController';
import validationMiddleware from '../middlewares/validations';

const userRoutes = (router) => {
    router.route('/auth/signup')
        .post(
            validationMiddleware.signup,
            UserController.signup
        );

    router.route('/auth/login')
        .post(
            validationMiddleware.login,
            UserController.login
        );
};

export default userRoutes;
