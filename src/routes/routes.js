var express = require('express');
var router = express.Router();
var passport = require('passport');
var controllers = require('.././controllers');
var AuthMiddleware = require('.././middleware/auth');

//Enlace de direcciones principales
router.get('/', controllers.HomeController.index);
router.get('/proyectos', controllers.HomeController.proyectos);
router.get('/desperfectos', controllers.HomeController.desperfectos);
router.get('/contact', controllers.HomeController.contact);
router.get('/about', controllers.HomeController.about);

//Crear propuesta
router.get('/create', controllers.CreateController.getCreate);
router.post('/create', controllers.CreateController.postCreate);

//routas de usuario
router.get('/auth/signup', controllers.UserController.getSignUp);
router.post('/auth/signup', controllers.UserController.postSignUp);
router.get('/auth/signin', controllers.UserController.getSignIn);
router.post('/auth/signin',  passport.authenticate('local', {
	successRedirect : '/',
	failureRedirect : '/auth/signin',
	failureFlash : true
}));
router.get('/auth/logout', controllers.UserController.logout);
router.get('/users/panel', AuthMiddleware.isLogged ,controllers.UserController.getUserPanel);

module.exports = router;
