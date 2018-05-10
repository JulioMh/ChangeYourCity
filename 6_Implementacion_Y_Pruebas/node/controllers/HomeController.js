module.exports = {

	index : function(req, res, next){
		res.render('home', {
			isAuthenticated : req.isAuthenticated(),
			user : req.user
		});			
	}
}