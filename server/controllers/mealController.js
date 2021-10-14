import generateId from '../constants/functions';
import meals  from '../models/mealModel';

class MealController 
{
    getMeals(req, res) {
        return res.status(200).json(meals);
    };
    
    postMeal(req, res) {
        const nextId = generateId(meals);
        meals.push({"id":nextId,"content": req.body.content});
        return res.status(201).json(meals);
    };
    
    putMeal(req, res) {
        let foundMeal = false;
        meals.map((meal, index)=> {
            if(meal.id == req.params.id)
            {
                meal.content = req.body.content;
                foundMeal = true;
            }     
        });
        if(!foundMeal){
            return res.status(401).json("Meal with id {" + req.param.id + "} not found");
        }
        res.status(201).json(meals);
    };
    deleteMeal(req, res) {
        let foundMeal = false;
        meals.map((meal, index)=> {
            if(meal.id == req.params.id)
            {
                foundMeal = true;
                meals.splice(index, 1);
            }   
        });

        if(!foundMeal){
            return res.status(401).json("Cannot delete! Meal with id {" + req.param.id + "} not found");
        }
        res.status(201).json(meals);
    };
}
export default new MealController();
