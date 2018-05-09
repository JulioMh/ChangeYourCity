var mysql = require('mysql');

module.exports = {

  getSignUp : function(req, res, next) {
    return res.render('users/signup');
  },

  postSignUp : function(req, res, next) {
      console.log(req.body);
      return;
  }

};
