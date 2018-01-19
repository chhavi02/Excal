var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	// console.log(req.body);
	res.render('attendance');
});

router.post('/', function(req, res) {
	console.log(req.body);
	res.redirect('/');
})

module.exports = router;