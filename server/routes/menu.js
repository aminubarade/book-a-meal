import MenuController from '../controllers/menuController';
import authMiddleware from '../middlewares/authentications';
import validationMiddleware from '../middlewares/validations';
const menuRoutes = (router) => {
    router.route('/menu')
        .post(
            validationMiddleware.postMenu,authMiddleware.verifyToken, authMiddleware.isCaterer,
            MenuController.postMenu
        )
        .get(
            authMiddleware.verifyToken,
            MenuController.getMenu
        );

    router.route('/menu/:id')
        .put(
            validationMiddleware.putMenu(req, res),authMiddleware.verifyToken, authMiddleware.isCaterer,
            MenuController.putMenu
        )
        
};

export default menuRoutes;
