<<<<<<< HEAD
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
=======
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	if(req.session && req.session.empCode) {
		if(req.session.isAdmin) {
			res.redirect('admin/dashboard');
		} else {
			res.send('Normal User');
		}
	} else {
		res.render('index');
	}
});

module.exports = router;
>>>>>>> 2905068d253c8e37be94e62479d890d2b036083d
