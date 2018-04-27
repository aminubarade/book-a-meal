//proccess.NODE_ENV = "test" ;


let chai = require('chai') ;
let chaiHttp = require('chai-http');
let should = chai.should() ;

let server = require('./app') ;

chai.use(chaiHttp);

describe("Meals", ()=>{

    describe("/GET Meals", ()=>{
        it("it should get all meals",(done) => {
            chai.request(server).get('/meals')
                .end((err, res)=> {
                    res.should.have.status(200) ;
                    res.should.be.a('array') ;
                    done() ;
                })
        })
    })
});