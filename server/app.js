import express from 'express';
import http from 'http';
import  createError from 'http-errors';
import bodyParser from 'body-parser';

import routes from './routes/index';

const app = express();

require('dotenv').config();

const key = process.env.SECRET_KEY;
app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded({extended:false}));
routes(app);

// const router = express.Router();
// routes(router);

// app.use('api/v1/', router);

// generate 404 errors when route note found
// app.use((req, res, next) => {
//     next(createError(404));
// })

// app.use((err, req, res,next) =>{
//     res.status(401)
//     res.json('The specified link not found!')
// })

const server = http.createServer(app) ;

//server.on('listening', ()=>console.log("App is listening on " + 3000) );
server.listen(3000) ;

module.exports = server ;
