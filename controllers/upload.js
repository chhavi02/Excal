var fs = require('fs');

exports.uploadPOST = function(req, res) {
	// console.log(req.body);
	if(req.session && req.session.empCode) {
		var imageData = req.body.image.split(',')[1];
		fs.writeFile('uploads/' + req.session.empCode + '.png', imageData, 'base64', function(error, sec) {
			if(error) {
				console.log('Error: ' + error);
			}
			// console.log(sec);
			// res.send(error);
			// res.end();
			res.redirect('/');
		});
	} else {
		res.redirect('/');
	}

// 


}