var bcrypt = require('bcrypt');
var employees = require('../models/employee');

exports.loginPOST = function(req, res) {
	console.log('Login POST Method');
	console.log(req.body);	
	// console.log(employees);

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
		 bcrypt.compare(req.body.password, data.password, function(error, passMatch) {
		 	if(error) {
		 		console.log('Password Validation Failed.');
		 		res.json({
		 			responseMessage: 'Failed authentication'
		 		});
		 	// res.render('login');
		 	}
		 	if(passMatch === true) {
		 		res.redirect('/dashboard');
		 	}
		 })

		 res.send("Working");
		}
	});
}