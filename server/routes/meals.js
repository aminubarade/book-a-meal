import express from 'express';
import mealController from '../controllers/mealController';

const router = express.Router();

router.get('/', mealController.getMeals);

router.post('/', mealController.postMeal);

router.put('/:id', mealController.putMeal);

router.delete('/:id', mealController.deleteMeal);


export default router;