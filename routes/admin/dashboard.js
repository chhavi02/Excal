<<<<<<< HEAD
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.render('admin/dashboard');
});
=======
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	if(req.session && req.session.empCode) {
		if(req.session.isAdmin) {
			// res.render('admin/dashboard');
			res.render('admin/dashboard', {
 				image: req.session.image,
 				name: req.session.empName
 			});
		} else {
			res.send('Normal User page');
		}
	} else {
		res.redirect('/');
	}
});
>>>>>>> 2905068d253c8e37be94e62479d890d2b036083d
module.exports = router;