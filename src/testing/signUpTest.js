const request = require('supertest');
const app = require('../app');
const expect = require('chai').expect;

describe('redireccion de Registro a Login correcta', function() {
    it('Should success if credential is valid', function(done) {
        request(app)
           .post('/auth/signup')
           .send({ username: 'a@root.com', password: 'root' })
           .expect(302)
           .expect('Location', '/auth/signin')
           .end(done);
    });
});

describe('Intento de registro vacío', function(err) {
    it('Should success if credential is invalid', function(done) {
        request(app)
           .post('/auth/signup')
           .send({ username: '', password: '' })
           .expect(302)
           .expect('Location', '/auth/signup')
           if (err) return done(err)
           .end(done);
    });
});

describe('Intento de registro repetido', function(err) {
    it('Should success if credential is in db', function(done) {
        request(app)
           .post('/auth/signup')
           .send({ username: 'root@root.com', password: 'root' })
           .expect(302)
           .expect('Location', '/auth/signup')
           if (err) return done(err)
           .end(done);
    });
});
