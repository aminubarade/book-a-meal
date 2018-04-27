var express = require('express') ;
var app = express() ;
var http = require('http') ;
var data = require("./data.json") ;
var createError = require('http-errors') ;

var meals = data.meals ;
var menu = data.menu ;
var orders = data.orders ;
var caterer = data.caterer;

app.use(express.json()) ;
app.use(express.urlencoded({extended:false})) ;

// a function to generate Id from resource
let generateNextId = (array) => {
    var length = array.length ;
    var lastId = length != 0 ? array[length - 1].id : 0 ;
    return ++lastId ;
}

app.get("/", (req, res) => {
   // res.send('Hello from BookAMeal')
    res.json(meals) ;
});

app.get("/api/v1/meals", (req, res) => {
    res.status(200)
    res.json(meals) ;
});

app.post("/api/v1/meals", (req, res) => {
    
    var nextId = generateNextId(meals) ;
    meals.push({"id":nextId,"content": req.body.content});
    res.status(200)
    res.json(meals) ;
    
});

app.put("/api/v1/meals/:mealId",  (req, res) => {

    meals.map((meal, idx)=> {
        if(meal.id == req.params.mealId)
            meal.content = req.body.content ;
    })
    
    res.status(200)
    res.json(meals) ;
})


app.delete("/api/v1/meals/:mealId",  (req, res) => {

    meals.map((meal, idx)=> {
        if(meal.id == req.params.mealId)
            meals.splice(idx, 1);

    })

    res.status(200)
    res.json(meals) ;
});


app.get("/api/v1/orders", function (req, res) {
    res.status(200)
    res.json(orders) ;
});

app.post("/api/v1/orders", (req, res) => {
    
    var nextId = generateNextId(orders) ;
    orders.push({"id":nextId,user:req.body.user,"content": req.body.content});
    res.status(200)
    res.json(orders) ;
});

app.put("/api/v1/orders/:orderId",  (req, res) => {

    orders.map((order, idx)=> {
        if(orders.id == req.params.orderId)
            order.content = req.body.content ;
    })

    res.status(200)
    res.json(orders) ;
});

app.get("/api/v1/menu", function (req, res) {
    res.status(200)
    res.json(menu) ;
});
app.post("/api/v1/menu", (req, res) => {
    var nextId = generateNextId(menu) ;
    var date = new Date() ;
    menu.push({"id":nextId,caterer:req.body.caterer,"content": req.body.content,"date" : date});
    res.status(200)
    res.json(menu) ;
});


// generate 404 errors when route note found
app.use((req, res, next) => {
    next(createError(404));
})

app.use((err, req, res,next) =>{
    res.status(401)
    res.json('The specified link not found!')
})

var server = http.createServer(app) ;
server.listen(5000, ()=>console.log("App is listening on 5000")) ;

module.exports = server ;