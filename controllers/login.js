var bcrypt = require('bcrypt');
var employees = require('../models/employee');

exports.loginPOST = function(req, res) {
	console.log('Login POST Method');
	console.log(req.body);
	var empCode = req.body.empCode; //Deal undefined
	console.log(empCode);
	employees.findOne({'empCode': empCode},function(err,result){
		if(err){
			res.status(400).send(err);
		}
		if(!result){
			res.send("No employee exists with this employee Code");
		}
		else{ //if no else then error :/
		 console.log(result);
		 var password = result.password;
		 console.log(password);
		 res.send("Working");
		}
	})

	// .then((database_password)=>{
	// 	console.log(database_password);
	// 	res.send(database_password);
	// },(e)=>{
	// 	console.log("No employee with such code");
	// 	res.status(400).send();
	// })	;


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