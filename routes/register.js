<<<<<<< HEAD
var express = require('express');
var router = express.Router();

var registerController = require('../controllers/register');

router.get('/', function(req, res){
	res.render('register');
});

router.post('/', registerController.registerPOST);

=======
var express = require('express');
var router = express.Router();

var registerController = require('../controllers/register');

router.get('/', function(req, res){
	res.render('register');
});

router.post('/', registerController.registerPOST);

>>>>>>> 2905068d253c8e37be94e62479d890d2b036083d
module.exports = router;