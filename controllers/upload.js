var fs = require('fs');

exports.uploadPOST = function(req, res) {
	// console.log(req.body);
	if(req.session && req.session.empCode) {
		var imageData = req.body.image.split(',')[1];
		var dest = __dirname + '/../python/images/' + req.session.empCode + '/register';
		if(!fs.existsSync(dest)) {
			fs.mkdirSync(dest);
		}
		fs.writeFile('python/images/' + req.session.empCode + '/register/' + req.session.empCode + '.png', imageData, 'base64', function(error, sec) {
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
