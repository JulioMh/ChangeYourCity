module.exports = {

	index : function(req, res, next){
		res.render('index', {
			isAuthenticated : req.isAuthenticated(),
			user : req.user
		});
	},

	desperfectos : function(req, res, next){
		res.render('desperfectos', {
			isAuthenticated : req.isAuthenticated(),
			user : req.user
		});
	},

	proyectos : function(req, res, next){
		res.render('proyectos', {
			isAuthenticated : req.isAuthenticated(),
			user : req.user
		});
	},

	contact : function(req, res, next){
		res.render('contact', {
			isAuthenticated : req.isAuthenticated(),
			user : req.user
		});
	},
	about : function(req, res, next){
		res.render('about', {
			isAuthenticated : req.isAuthenticated(),
			user : req.user
		});
	}
}
