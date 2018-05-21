const request = require('supertest');
const app = require('../app');
const expect = require('chai').expect;

describe('redireccion Login correcta', function() {
    it('Should success if credential is valid', function(done) {
        request(app)
           .post('/auth/signin')
           .send({ username: 'root@root.com', password: 'root' })
           .expect(302)
           .expect('Location', '/')
           .end(done);
    });
});


describe('redireccion Login erróneo correcta', function() {
    it('Should success if credential is not valid', function(done) {
        request(app)
           .post('/auth/signin')
           .send({ username: 's@root.com', password: 'root' })
           .expect(302)
           .expect('Location', '/auth/signin')
           .end(done);
    });
});
