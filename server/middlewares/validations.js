import { request } from "https";

class Validation{


    static signup(req, res, next)
    {
        const emailRegularExpression = /^.+@.+\..+$/i;
        const {fullname,username,email,role,password,confirmPassword} = req.body;
        if(!fullname || typeof fullname !== 'string')
        {
            return res.status(400).send({fullname:'Enter  fullname!'});
        }
        else if(!username || typeof username !== 'string')
        {
            return res.status(400).send({username:'Enter  username!'});
        }
        else if(!email || !emailRegularExpression.test(email))
        {
            return res.status(400).send({email:'Enter  a valid email!'});
        }
        else if(!role || typeof username !== 'string')
        {
            return res.status(400).send({role:'Select a valid role!'});
        }
        else if(!password || typeof password !== 'string')
        {
            return res.status(400).send({password:'Enter  password!'});
        }
        else if(password && password !== confirmPassword)
        {
            return res.status(400).send({confirmPassword:'passwords do not match!'});
        }
        return next();

    }
    static login(req, res, next)
    {
        const {username,password} = req.body;
        if(!username || typeof username !== 'string')
        {
            return res.status(400).send({username:'Enter  username!'});
        }
        else if(!password || typeof password !== 'string')
        {
            return res.status(400).send({username:'Enter  password!'});
        }
        return next();

    }

    static postOrder(req, res, next)
    {
        const {user,caterer,content,price} = req.body;
        if(!user || typeof user !== 'string')
        {
            return res.status(400).send({user:'Invalid user!'});
        }
        else if(!caterer || typeof caterer !== 'string')
        {
            return res.status(400).send({caterer:'Select  caterer!'});
        }
        else if(!content || typeof content !== 'string')
        {
            return res.status(400).send({content:'Select  meal!'});
        }
        else if(!price || typeof price !== 'number')
        {
            return res.status(400).send({price:'Invalid price!'});
        }
        return next();

    }

    static postMeal(req, res, next)
    {
        const {caterer,content,price} = req.body;
        if(!caterer || typeof caterer !== 'string')
        {
            return res.status(400).send({caterer:'Invalid  caterer!'});
        }
        else if(!content || typeof content !== 'string')
        {
            return res.status(400).send({content:'Specify  content!'});
        }
        else if(!price || typeof price !== 'number')
        {
            return res.status(400).send({price:'Invalid price!'});
        }
        return next();

    }

    static putMeal(req, res, next)
    {
        const {content,price} = req.body;
        if(!content || typeof content !== 'string')
        {
            return res.status(400).send({content:'Specify  content!'});
        }
        else if(!price || typeof price !== 'number')
        {
            return res.status(400).send({price:'Invalid price!'});
        }
        return next();

    }

    static postMenu(req, res, next)
    {
        const {caterer,content,price} = req.body;
        if(!caterer || typeof caterer !== 'string')
        {
            return res.status(400).send({caterer:'Invalid  caterer!'});
        }
        else if(!content || typeof content !== 'string')
        {
            return res.status(400).send({price:'Enter content!'});
        }
        return next();

    }

    static putMenu(req, res, next)
    {
        console.log('put menu', '=====',req)
        const {caterer,content} = req.body;
        if(!caterer || typeof caterer !== 'string')
        {
            return res.status(400).send({caterer:'Invalid  caterer!'});
        }
        else if(!content || typeof content !== 'string')
        {
            return res.status(400).send({price:'Enter content!'});
        }
        return next();

    }
}

export default Validation;
