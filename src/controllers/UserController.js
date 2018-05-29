var mysql = require('mysql');
var bcrypt = require('bcryptjs');

module.exports = {

	getSignUp : function(req, res, next){
		return res.render('users/register');
	},

	postSignUp: function(req, res, next){

		var salt = bcrypt.genSaltSync(10);
		var password = bcrypt.hashSync(req.body.password, salt);

		var user = {
			email : req.body.email,
			firstName : req.body.nombre,
			password : password
		};

		var config = require('.././database/config');

		var db = mysql.createConnection(config);

		db.connect();

		db.query('INSERT INTO user SET ?', user, function(err, rows, fields){
			if(err) {
				db.end();
				return res.redirect('/auth/signup');
			} else {
				db.end();
				req.flash('info', 'Se ha registrado correctamente, ya puede iniciar sesion');
				return res.redirect('/auth/signin');
			}
		});
	},

	getSignIn: function(req, res, next){
		return res.render('users/login', {message: req.flash('info'), authmessage : req.flash('authmessage')});
	},

	logout : function(req, res, next){
		req.logout();
		res.redirect('/');
	},

	getUserPanel : function(req, res, next){
		res.render('home', {
			isAuthenticated : req.isAuthenticated(),
			user : req.user
		});
	}



};
