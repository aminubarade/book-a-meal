import db from '../models';
const { Menu, Meal } = db;
class MenuController {
    static async getMenu(req, res) {
        try {
            const { menuDate } = req.body.menuDate;
            const dateMenu = await Menu.findAll({
                where: { menuDate },
                include: [{
                    model: Meal,
                    attribute: 'id',
                    as: 'meals'
                }]
            });
            return res.status(200).json({
                message: 'Menu for this Date',
                dateMenu
            })
        } catch (error) {
            return res.status(400).json({ message: 'something went wrong', error })
        }
    };
    static async postMenu(req, res) {
        try {
            const { title, description, mealId, menuDate } = req.body;
            const userId = req.decoded.id;
            const newMenu = { title, description, userId, menuDate };
            const savedMenu = await Menu.create(newMenu);
            savedMenu.addMeals([...mealId]);
            return res.status(201).json({ message: 'menu saved!', savedMenu });
        } catch (error) {
            return res.status(400).json({ message: 'something went wrong', error })
        }
    };


}

export default MenuController;
