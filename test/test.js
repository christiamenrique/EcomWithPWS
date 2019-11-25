// node packages
require('dotenv').config()
const chai = require("chai");
const expect = chai.expect();
const request = require('request');
const chaiHttp = require('chai-http');
const app = require('../server/server');

//  The unit tests uses mocha and chai 
// it include positive tests

//makes sure I have a positive result on the main page
chai.should()
chai.use(chaiHttp);

//able to get all products 
describe('Tests for /products api endpoint', () => {
    it("/products should send back 200 status code", (done) => {
        chai.request(app)
            .get('/products')
            .end((error, response) => {
                // console.log('response - ', response.body)
                response.should.have.status(200);
                done();
            })
    })
    it("/contacts should send back 200 status code", (done) => {
        chai.request(app)
            .get('/contacts')
            .end((error, response) => {
                // console.log('response - ', response.body)
                response.should.have.status(200);
                done();
            })
    })

    it("/producttypefilter/:query should send back 200 status code", (done) => {
        chai.request(app)
            .get('/api/users')
            .end((error, response) => {
                // console.log('response - ', response.body)
                response.should.have.status(200);
                done();
            })
    })
});