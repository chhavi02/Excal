var fs = require('fs');

exports.uploadPOST = function(req, res) {
	// console.log(req.body);

	var imageData = req.body.image.split(',')[1];

	fs.writeFile('uploads/' + '1000' + '.png', imageData, 'base64', function(error, sec) {
		if(error) {
			console.log('Error: ' + error);
		}
		// console.log(sec);
		// res.send(error);
		res.end();
	});
// 


}