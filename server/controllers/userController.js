import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import models from '../models';


const Users = models.User;
class UserController {
   static signup(req, res) {
        const {email, username, fullname, password} = req.body;
        Users.find({
            where: {
                $or: [
                    { email },
                    { username }
                ]
            }
        })
            .then((foundUser) => {
                if (!foundUser) {
                    return Users.create({
                        email,
                        username,
                        fullname,
                        password: bcrypt.hashSync(password, 10),
                    })
                        .then((newUser) => {
                            const token = jwt.sign({ user: foundUser }, process.env.SECRET_KEY, {
                                expiresIn: 60 * 60 * 24
                            });
                            res.status(201).send({
                                message: 'Signup Successful',
                                username,
                                fullname,
                                email,
                                Token: token
                            });
                        })
                        .catch((err) => {
                            res.status(500).send({
                                message: 'some error occured!'
                            });
                        });
                }
            })
            .catch((err) => {
                res.status(500).send({
                    message: 'some error occured!'
                });
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
