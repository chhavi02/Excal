var express = require('express');
var router = express.Router();

var uploadController = require('../controllers/upload');


function checkLogin(req, res, next) {
	if(req.session) {
		next();
	} else {
		res.redirect('/');
	}
}

router.get('/', checkLogin, function(req, res, next) {
	console.log('Upload image route');
	if(req.session.image) {
		res.redirect('/');
	} else {
		req.session.name = 'Pawandeep' // Set for testing.
		res.render('upload', {
			name: req.session.name
		});
	}
});

router.post('/', uploadController.uploadPOST);

module.exports = router;