var mysql = require('mysql');

module.exports = {

	getCreate : function(req, res, next){
		return res.render('create');
	},

	postCreate: function(req, res, next){

		var propuesta = {
			titulo : req.body.titulo,
			localidad : req.body.localidad,
			informacion : req.body.informacion,
			creator: req.user.email
		};

		var config = require('.././database/config');

		var db = mysql.createConnection(config);

		db.connect();

		db.query('INSERT INTO propuesta SET ?', propuesta, function(err, rows, fields){
			if(err) {
				db.end();
				return res.redirect('/create');
			} else {
				db.end();
				req.flash('info', 'Se ha registrado correctamente la propuesta');
				return res.redirect('/');
			}
		});
	}

};
