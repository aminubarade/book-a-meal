const express = require('express') ;
const app = express() ;
const http = require('http') ;
const data = require("./data.json") ;

var meals = data.meals ;
var menu = data.menu ;
var orders = data.orders ;
var caterer = data.caterer;

app.use(express.json()) ;
app.use(express.urlencoded({extended:false})) ;
app.get("/", (req, res) => {
   // res.send('Hello from BookAMeal')
    res.json(meals) ;
});

app.get("/meals", function (req, res) {
    res.status(200)
    res.json(meals) ;
});

app.post("/meals", (req, res) => {
    var length = meals.length ;
    var lastId = length != 0 ? meals[length - 1].id : 0 ;
    var nextId = ++lastId ;
    meals.push({"id":nextId,"content": req.body.content});
    res.status(200)
    res.json(meals) ;
});

app.put("/meals/:mealId",  (req, res) => {

    meals.map((meal, idx)=> {
        if(meal.id == req.params.mealId)
            meal.content = req.body.content ;
    })
    
    res.status(200)
    res.json(meals) ;
})


app.delete("/meals/:mealId",  (req, res) => {

    meals.map((meal, idx)=> {
        if(meal.id == req.params.mealId)
            meals.splice(idx, 1);

    })

    res.status(200)
    res.json(meals) ;
});


app.get("/orders", function (req, res) {
    res.status(200)
    res.json(orders) ;
});

app.post("/orders", (req, res) => {
    var length = orders.length ;
    var lastId = length != 0 ? orders[length - 1].id : 0 ;
    var nextId = ++lastId ;
    orders.push({"id":nextId,user:req.body.user,"content": req.body.content});
    res.status(200)
    res.json(orders) ;
});

app.put("/orders/:orderId",  (req, res) => {

    orders.map((order, idx)=> {
        if(orders.id == req.params.orderId)
            order.content = req.body.content ;
    })

    res.status(200)
    res.json(orders) ;
});

app.post("/menu", (req, res) => {
    var length = menu.length ;
    var lastId = length != 0 ? menu[length - 1].id : 0 ;
    var nextId = ++lastId ;
    var date = new Date() ;
    orders.push({"id":nextId,caterer:req.body.caterer,"content": req.body.content,"date" : date});
    res.status(200)
    res.json(orders) ;
});




const server = http.createServer(app) ;
server.listen(4000, ()=>console.log("App is listening on 4000")) ;

module.exports = server ;