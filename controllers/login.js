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
				
			}

		})
	}, function(error));*/
}