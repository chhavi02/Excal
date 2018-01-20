var express = require('express');
var router = express.Router();
var fs = require('fs');
var multer = require('multer');

/*function uploadFile(req, res, destinationPath, callback) {
	var fileName;
	var Storage = multer.diskStorage({
		destination: function(req, file, callback) {
			callback(null, destinationPath);
		},
		filename: function(req, file, callback) {
			fileName = req.session.empCode+ '_' + '1.jpg';
			callback(null, filename);
		}
	});
	var upload = multer({
		storage: Storage
	}).array("file", 3);
	upload(req, res, function(err) {
		callback(err, destinationPath + fileName)
	});
}
*/

router.get('/', function(req, res) {
	// console.log(req.body);
	res.render('attendance');
});

router.post('/', function(req, res) {
	// console.log(req.body);
	// var arr = new Array(10);
	// arr = req.body.photo;
	console.log(req.body.photo);;
	// var data = req.body.photo;
	var imageData = req.body.photo.split('|');
	console.log('\n\n\n\n\n\n\n\n' + imageData[0] + '|||');
	console.log('\n\n\n\n\n\n\n\n' + imageData[1] + '|||');
	var i = 1;
	for(i = 1; i <= 5; i++) {
				var myImg = imageData[i - 1].split(',')[1];

		fs.writeFile('uploads/temp' + req.session.empCode + '_' + i + '.png', myImg, 'base64', function(error, sec) {
				if(error) {
					console.log('Error: ' + error);
				}
				console.log('upload successful');
		});
	}
});

module.exports = router;