var express = require('express');
var router = express.Router();
var controller = require('.././controllers');

router.get('/', controller.homeController.index);

router.get('/signup', controller.userController.getSignUp);
router.post('/signup', controller.userController.postSignUp);

module.exports = router;
