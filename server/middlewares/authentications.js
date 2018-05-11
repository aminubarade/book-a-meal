import jwt from 'jsonwebtoken';


const SECRET_KEY = process.env.SECRET_KEY;

const auth= {
    verifyToken: (req, res, next) => {
        const token = req.body.token || req.query.token || req.headers.token;
        if (!token) {
            res.status(400).send({
                message: 'Unauthorised User!'
            });
        }
        jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).send({
                    error: 'Token is invalid'
                });
            }
            req.decoded = decoded;
            next();
        });
    },
    isCaterer: (req, res, next) => {
        if (req.decoded && req.decoded.role === 'Caterer') {
            return next();
        }
        return res.status(401).send({
            message: 'You Are not Authorized to access this page!'
        });
    },
    isCustomer: (req, res, next) => {
        if (req.decoded && req.decoded.role === 'Customer') {
            return next();
        }
        return res.status(401).send({
            message: 'You Are not Authorized to access this page!'
        });
    }
};
export default auth;
