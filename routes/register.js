var express = require('express');
var router = express.Router();

var registerController = require('../controllers/register');

router.get('/', function(req, res){
	res.render('register');
});

router.post('/', registerController.registerPOST);

module.exports = router;