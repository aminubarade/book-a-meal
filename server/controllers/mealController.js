import db from '../models';
const { Meal } = db;

class MealController 
{
    static async getMeals(req, res) {
        try {
            const meals = await Meal.findAll({where: {userId: req.decoded.id}});
            if (meals.length == 0) {
                return res.status(400).json({message: 'no meal found!'});
            }
            return res.status(200).json(meals);
        } catch (error)
        {
            return res.status(400).json({message:'something went wrong', error})
        }
    };

    static async postMeal(req, res) {
        console.log('hbhbhbhb', req.body)

        try {
            const {name,description,imageUrl,price} = req.body;
            const userId = req.decoded.id;
            const meal = await Meal.findOne({where: {name: name}});
            if (meal) {
                return res.status(400).json({message: 'meal already exist!!'});
            }
            const newMeal = {name,price,imageUrl,description,userId};
            const savedMeal = await Meal.create(newMeal);
            return res.status(200).json({message:'meals saved!',savedMeal});
        } catch (error)
        {
            return res.status(400).json({message:'something went wrong', error})
        }
    };
    static async putMeal(req, res) {
        try {
            const {name,description,imageUrl,price} = req.body;
            const userId = req.decoded.id;
            const mealId = req.param.id;
            const foundMeal = await Meal.findById(mealId);
            if (!foundMeal) {
                return res.status(400).json({message: 'meal not found!'});
            }
            else if(foundMeal.userId !== userId)
            {
                return res.status(400).json({message: "you can't edit meal!"});
            }
            const updatedMeal = await foundMeal.update(name,description,imageUrl,price);
            return res.status(200).json({message:'meals updated!',updatedMeal});
        } catch (error)
        {
            return res.status(400).json({message:'something went wrong', error})
        }
    };

    static async deleteMeal(req, res) {
        try {
            const userId = req.decoded.id;
            const mealId = req.param.id;
            const foundMeal = await Meal.findById(mealId);
            if (!foundMeal) {
                return res.status(400).json({message: 'meal not found!'});
            }
            else if(foundMeal.userId !== userId)
            {
                return res.status(400).json({message: "you can't delete meal!"});
            }
            await foundMeal.destroy();
            return res.status(200).json({message:'meals updated!'});
        } catch (error)
        {
            return res.status(400).json({message:'something went wrong', error})
        }
    };
}
export default MealController;
