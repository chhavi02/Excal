var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	if(req.session && req.session.empCode) {
		if(req.session.isAdmin) {
			res.render('admin/dashboard');
		} else {
			res.send('Normal User page');
		}
	} else {
		res.redirect('/');
	}
});
module.exports = router;