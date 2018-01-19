var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	console.log(req);
	res.render('attendance');
});

module.exports = router;