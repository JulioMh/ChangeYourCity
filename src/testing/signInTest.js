const request = require('supertest');
const app = require('../app');
const expect = require('chai').expect;

describe('Pruebas para iniciar sesion: ', function() {
    it('Debe volver a la pagina de inicio si el inicio de sesion es valido', function(done) {
        request(app)
           .post('/auth/signin')
           .send({ username: 'root@root.com', password: 'root' })
           .expect(302)
           .expect('Location', '/')
           .end(done);
    });

    it('Debe permanecer en la pagina de iniciar sesion si el registro no es valido', function(done) {
        request(app)
           .post('/auth/signin')
           .send({ username: 's@root.com', password: 'root' })
           .expect(302)
           .expect('Location', '/auth/signin')
           .end(done);
    });

    it('Debe permanecer en la pagina de iniciar sesion si no se introduce usuario', function(done) {
        request(app)
           .post('/auth/signin')
           .send({ username: '', password: 'root' })
           .expect(302)
           .expect('Location', '/auth/signin')
           .end(done);
    });

    it('Debe permanecer en la pagina de iniciar sesion si no se introduce contraseña', function(done) {
        request(app)
           .post('/auth/signin')
           .send({ username: 'root@root.com', password: '' })
           .expect(302)
           .expect('Location', '/auth/signin')
           .end(done);
    });

    it('Debe permanecer en la pagina de iniciar sesion si no se introduce ni usuario ni contraseña', function(done) {
        request(app)
           .post('/auth/signin')
           .send({ username: '', password: '' })
           .expect(302)
           .expect('Location', '/auth/signin')
           .end(done);
    });


});
