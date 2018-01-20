var bcrypt = require('bcrypt');

exports.loginPOST = function(req, res) {
	console.log('Login POST Method');
	console.log(req.body);
	// Select from employee table where empid = req.body.empId
	// Promise
	/*.then(function(data) {
		bcrypt.compare(req.body.password, data.password, function(error, passMatch) {
			if(error) {
				console.log('Password validation failed.');
			/*	res.json({
					responseMessage: 'Failed authentication'
				});*/
	/*			res.render('login');
			}
			if(passMatch === true) {

			}*/

	employees.findOne({'empCode': req.body.empCode}, function(err, result){
		if(err){
			console.log('Error BC!!!');
			console.log('Error: ', err);
			// res.status(400).send(err);
			res.send(err);
		}
		if(!result){
			console.log('No result');
			res.send("No employee exists with this employee Code");
		}
		else{ //if no else then error :/
		 console.log(result);
		 var password = result.password;
		 console.log(password);
		 bcrypt.compare(req.body.password, password, function(error, passMatch) {
		 	if(error) {
		 		console.log('Password Validation Failed.');
		 		res.json({
		 			responseMessage: 'Failed authentication'
		 		});
		 	}
		 	if(passMatch === true) {
		 		var user = result;
		 		console.log(user);
	 		    var fileName = __dirname + '/../python/images/' + user.empCode + '/register/' + user.empCode + '.png';
			    var image = fs.readFileSync(fileName);
			    req.session.image = new Buffer(image, 'binary').toString('base64');
			    req.session.image = 'data:image/png;base64,' + req.session.image;
			    console.log(req.session.image);

				req.session.empCode = user.empCode;
                req.session.empName = user.empName;
                req.session.cookie.maxAge = 24 * 60 * 60 * 1000 * 365;
		 		if(user.empCode == 1997) {
		 			req.session.isAdmin = true;
		 			/*res.render('admin/dashboard', {
		 				image: req.session.image,
		 				name: req.session.empName
		 			});*/
		 			res.redirect('/dashboard');
		 		} else {
		 			req.session.isAdmin = false;
		 			res.send('normal user');
		 		}

		 	}
		 });
		}
	});
}
