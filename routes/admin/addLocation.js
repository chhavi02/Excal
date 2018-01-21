var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('admin/addLocation');
});

router.post('/', function(req, res) {
	console.log('Create centre post request.');
});

module.exports = router;