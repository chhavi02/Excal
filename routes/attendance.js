var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res) {
	// console.log(req.body);
	res.render('attendance');
});

router.post('/', function(req, res) {
	console.log(req.body);
	// var data = req.body.photo;
	// var imageData = req.body.photo.split('|');
	console.log(imageData[0]);
	// console.log(data);
	/*console.log('\n\n\n\n ', data);
	var i = 1;
	for(i = 1; i <= 5; i++) {
		fs.writeFile('uploads/temp' + req.session.empCode + '_' + i + '.jpg', imageData, 'base64', function(error, sec) {
				if(error) {
					console.log('Error: ' + error);
				}
		});
	}*/
});

module.exports = router;