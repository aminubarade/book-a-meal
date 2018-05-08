const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should() ;
const server = require('./../app');
chai.use(chaiHttp);
const rootUrl = '/api/v1';

// test GET for /Meals
describe('Meals', () =>  {
    let endPoint = rootUrl + '/meals' ;
    let meal = {'content' : 'Chinese rice and noodles'};
    describe('/GET Meals', () => {
        it('should get all meals',(done) => {
            chai.request(server).get(endPoint)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('/POST Meals', () =>  {
        it('should post a meal',(done) => {
            chai.request(server).post(endPoint).send(meal)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.should.be.a('object');
                    done() ;
                });
        });
    });
});

describe('Menu', () =>  {
    let endPoint = rootUrl + '/menu';
    let menu = {'caterer':'Chinese Restaurant','content' : 'Chinese rice and noodles', 'date' : new Date() } ;
    describe('/GET Menu', () => {
        it('should get all menu',(done) => {
            chai.request(server).get(endPoint)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.a('object');
                    done();
                });
        });
    });    
    describe('/POST Menu', () =>  {
        it('should post a menu',(done) =>  {
            chai.request(server).post(endPoint).send(menu)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.should.be.a('object');
                    done();
                });
        });
    });
});

describe('Orders', () =>  {
    let endPoint = rootUrl + '/orders';
    let order = {'user':'Aminu Barade','content' : 'Chinese rice and noodles', 'date' : new Date() } ;
    describe('/GET Orders', () => {
        it('should get all orders',(done) =>  {
            chai.request(server).get(endPoint)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('/POST Order', () => {
        it('should post an order',(done) =>  {
            chai.request(server).post(endPoint).send(order)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.should.be.a('object');
                    done();
                });
        });
    });
    describe('Orders', () => {
        describe('/PUT update Order with id', () =>  {
            it('should update an order with id 1',(done) =>  {
                chai.request(server).put(rootUrl + '/orders/1')
                    .send({'content':'Akara and bread'})
                    .end((err, res) => {
                        res.should.have.status(201);
                        res.should.be.a('object');
                        done();
                    });
            });
        });
    });
});

