let chai = require('chai') ;
let chaiHttp = require('chai-http');
let should = chai.should() ;

let server = require('./app') ;

chai.use(chaiHttp);

// test GET for /meals
describe("Meals", ()=>{

    describe("/GET Meals", ()=>{
        it("should get all meals",(done) => {
            chai.request(server).get('/api/v1/meals')
                .end((err, res)=> {
                    res.should.have.status(200) ;
                    res.should.be.a('object') ;
                    done() ;
                })
        })
    })
});

//test POST for /meals
describe("Meals", ()=>{

    let meal = {"content" : "Chinese rice and noodles" } ;
    describe("/POST Meals", ()=>{
        it("should post a meal",(done) => {
            chai.request(server).post('/api/v1/meals').send(meal)
                .end((err, res)=> {
                    res.should.have.status(200) ;
                    res.should.be.a('object') ;
                    done() ;
                })
        })
    })
});


describe("Menu", ()=>{

    describe("/GET Menu", ()=>{
        it("should get all menu",(done) => {
            chai.request(server).get('/api/v1/menu')
                .end((err, res)=> {
                    res.should.have.status(200) ;
                    res.should.be.a('object') ;
                    done() ;
                })
        })
    })
});

describe("Menu", ()=>{

    let menu = {"caterer":"Chinese Restaurant","content" : "Chinese rice and noodles", "date" : new Date() } ;
    describe("/POST Meals", ()=>{
        it("should get all menu",(done) => {
            chai.request(server).post('/api/v1/menu').send(menu)
                .end((err, res)=> {
                    res.should.have.status(200) ;
                    res.should.be.a('object') ;
                    done() ;
                })
        })
    })
});

describe("Orders", ()=>{

    describe("/GET Orders", ()=>{
        it("should get all orders",(done) => {
            chai.request(server).get('/api/v1/orders')
                .end((err, res)=> {
                    res.should.have.status(200) ;
                    res.should.be.a('object') ;
                    done() ;
                })
        })
    })
});



describe("Orders", ()=>{

    let order = {"user":"Aminu Barade","content" : "Chinese rice and noodles", "date" : new Date() } ;
    describe("/POST Order", ()=>{
        it("should post an order",(done) => {
            chai.request(server).post('/api/v1/orders').send(order)
                .end((err, res)=> {
                    res.should.have.status(200) ;
                    res.should.be.a('object') ;
                    done() ;
                })
        })
    })
});

describe("Orders", ()=>{
    describe("/PUT update Order with id", ()=>{
        it("should update an order with id 1",(done) => {
            chai.request(server).put('/api/v1/orders/1')
                .send({"content":"Akara and bread"})
                .end((err, res)=> {
                    res.should.have.status(200) ;
                    res.should.be.a('object') ;
                    done() ;
                })
        })
    })
});
