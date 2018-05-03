import express from 'express';
import http from 'http';
import  createError from 'http-errors';

import meals from './routes/meals';
import menu from  './routes/menu';
import orders from './routes/orders';

const app = express();


app.use(express.json()) ;
app.use(express.urlencoded({extended:false}));

app.use('/api/v1/meals', meals);
app.use('/api/v1/menu', menu);
app.use('/api/v1/orders', orders);

// generate 404 errors when route note found
app.use((req, res, next) =>  {
    next(createError(404));
})
app.use((err, req, res,next) =>  {
    res.status(401);
    res.json('The specified link not found!');
})
const server = http.createServer(app);

//server.on('listening', ()=>console.log("App is listening on " + 3000) );
server.listen(3000);
module.exports = server;