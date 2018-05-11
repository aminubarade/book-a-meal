import db from '../models';
const { Order } = db;

class OrderController {
  static async getOrders(req, res) {
    try {
      const orders = await Order.find({ include: [{ model: User, where: { id: sequelize.literal(user.id) } }, { model: Meal }] });
      if (orders.length == 0) {
        return res.status(400).json({ message: 'no order found!' });
      }
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(400).json({ message: 'something went wrong', error })
    }
  };
  static async postOrder(req, res) {
    try {
      const { description, price, mealId } = req.body;
      const userId = req.decoded.id;
      const order = { price, description };
      const newOrder = await Order.create(order);
      const savedOrder = await newOrder.setMeal(mealId);
      const completeOrder = await savedOrder.setUser(userId);
      if (completeOrder) {
        return res.status(200).json({ message: 'order created!' });
      }
      return res.status(400).json({ message: 'problem occurred while creating order!' });
    } catch (error) {
      return res.status(400).json({ message: 'something went wrong', error })
    }
  };
  static async putOrder(req, res) {
    try {
      const { description, price, mealId } = req.body;
      const userId = req.decoded.id;
      const orderId = req.param.id;
      const update = { price, description };
      const oldOrder = await Order.find({ where: { id: orderId }, include: [{ model: User }] });
      if (oldOrder.user.id !== userId) {
        return res.status(400).json({ message: 'you cant edit this order' });
      }
      const updateOrder = await Order.update(update);
      const updatesOrder = await updateOrder.setMeal(mealId);
      const completeOrder = await updatesOrder.setUser(userId);
      if (completeOrder) {
        return res.status(200).json({ message: 'order updated!' });
      }
      return res.status(400).json({ message: 'problem occurred while creating order!' });
    } catch (error) {
      return res.status(400).json({ message: 'something went wrong', error })
    }
  };
}
export default OrderController;
