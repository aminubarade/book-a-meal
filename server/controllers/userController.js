import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import models from '../models';


const Users = models.User;
class UserController {
    static signup(req, res) {
        const { fullname, role, username, email, password } = req.body;
        return Users.create({
            email,
            role,
            username,
            fullname,
            password: bcrypt.hashSync(password, 10),
            plain: true,
        })
            .then((newUser) => {
                const token = jwt.sign(newUser.dataValues, process.env.SECRET_KEY);
                res.status(201).send({
                    message: 'Signup Successful',
                    username,
                    role,
                    fullname,
                    email,
                    token
                });
            })
            .catch((err) => {
                //console.log(err, 'ududududu')
                res.status(500).send(err);
            });


    }

    static login(req, res) {
        const { username, email, password, } = req.body;
        Users.findOne({
            where: {
                $or: [
                    { username: req.body.username },
                    { email: req.body.username }
                ]
            }
        })
            .then((foundUser) => {
                if (!foundUser) {
                    res.status(400).send({
                        message: 'Invalid Credentials!'
                    });
                }
                else if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                    const user = {
                        id: foundUser.id,
                        role: foundUser.role,
                        username: foundUser.username
                    }
                    const token = jwt.sign(user, process.env.SECRET_KEY, {
                        expiresIn: 60 * 60 * 24
                    });
                    return res.status(200).send({
                        message: 'Signin Successful!',
                        Token: token
                    });
                }
                else {
                    res.status(401).send({
                        Error: 'Incorrect Password'
                    });
                }
            });
    }
}
export default UserController;
