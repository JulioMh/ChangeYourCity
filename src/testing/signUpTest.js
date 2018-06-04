const request = require('supertest');
const app = require('../app');
const expect = require('chai').expect;

describe('Pruebas de registro de usuario:', function() {

    it('Funciona si el registro correcto es exitoso', function(done) {
        request(app)
           .post('/auth/signup')
           .send({ username: 'a@root.com', password: 'root' })
           .expect(302)
           .expect('Location', '/auth/signup')
           .end(done);
    });


    it('Debe de funcionar si se lanza un error al registrar un usuario vacio', function(done) {
        request(app)
           .post('/auth/signup')
           .send({ username: '', password: '' })
           .expect(302)
           .expect('Location', '/auth/signup')
           .end(done);
    });


    it('Funciona si se lanza una excepción al intentar registrar un usuario ya registrado', function(done) {
        request(app)
           .post('/auth/signup')
           .send({ username: 'root@root.com', password: 'root' })
           .expect(302)
           .expect('Location', '/auth/signup')
           .end(done);
    });
});
