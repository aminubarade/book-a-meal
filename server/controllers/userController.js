
import dotenv from 'dotenv';
import validator from 'validatorjs';
import generateId from '../constants/functions';
import users  from '../models/user';
import validation from '../middleware/validation';

dotenv.config();

const secret = process.env.SECRET_TOKEN;
class UserController {
    createUser(req, res) {
        
    }
}
export default new UserController();
