<<<<<<< HEAD
var express = require('express');
var router = express.Router();

var loginController = require('../controllers/login');

router.get('/', function(req, res){
	res.render('login');
});

router.post('/', loginController.loginPOST);

=======
var express = require('express');
var router = express.Router();

var loginController = require('../controllers/login');

router.get('/', function(req, res){
	res.render('login');
});

router.post('/', loginController.loginPOST);

>>>>>>> 2905068d253c8e37be94e62479d890d2b036083d
module.exports = router;