const request = require('supertest');
const app = require('../app');
const expect = require('chai').expect;

describe('Login API', function() {
    it('Should success if credential is valid', function(done) {
        request(app)
           .post('/auth/signin')
           .send({ username: 'root@root.com', password: 'root' })
           .expect(302)
           .expect('Location', '/')
           .end(done);
    });
});
