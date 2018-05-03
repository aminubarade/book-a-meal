import generateId from '../constants/functions';
import orders  from '../models/orderModel';

class orderController
{
    getOrders(req, res) {
        return res.status(200).json(orders);
    }
    postOrder(req, res) {
        const nextId = generateId(orders);
        orders.push({"id":nextId, "user":req.body.user,"caterer":req.body.caterer, "content":req.body.content});
        return res.status(200).json({"message":"Order completed successfully"});
    }
    putOrder(req, res) {
        let foundOrder = false;
        orders.map((currentOrder, index)=> {
            if(currentOrder.id == req.params.id)
            {
                currentOrder.caterer = req.body.caterer;
                currentOrder.content = req.body.content;
                foundOrder = true;
            }
        });
        if(!foundOrder){
            return res.status(401).json("Order with id {" + req.param.id + "} not found");
        }
        res.status(200).json(orders);
    }
}

export default new orderController();