var express = require('express');
var router = express.Router();

var loginController = require('../controllers/login');

router.get('/', function(req, res){
	res.render('login');
});

router.post('/', loginController.loginPOST);

module.exports = router;