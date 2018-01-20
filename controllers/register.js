var bcrypt = require('bcrypt');
var request = require('request');

var recaptcha = require('../recaptcha');

exports.registerPOST = function(req, res) {
	console.log('REGISTER POST');
	console.log(req.body);

	if(req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
		return res.json({
			'responseCode': 1,
			'responseDesc': 'Please select captcha'
		});
	} else {
		var key = recaptcha.key;
		var verificationURL = "https://www.google.com/recaptcha/api/siteverify?secret=" + key + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
		request(verificationURL, function(error, response, body) {
			body = JSON.parse(body);
			console.log(body);

			if(body.success === undefined && !body.success) {
				return res.json({
					'responseCode': 2,
					'responseDesc': 'Failed captcha verification'
				});
			} else {
				var newUser = req.body;
				bcrypt.genSalt(10, function(error, salt) {
					if(error) {
						console.log('Error generating salt.');
					}
					console.log(salt);
					bcrypt.hash(newUser.password, salt, function(error, hash) {
						if(error) {
							console.log('Error encryption password.');
							res.redirect('/');
						}
						req.body.hash = hash;
						res.redirect('/catalog/employee/create');
						console.log(hash);
						/* @Paragi.
							Insert into database.
							On successful insertion: 
								req.session.empId = user.empId;                                                                                                                                     
			                    req.session.empName = user.empName;                                                                                                                                 
			                    req.session.designation = user.designation;                                                                                                                         
			                    req.session.cookie.maxAge = 24 * 60 * 60 * 1000 * 365; 
			                    req.session.image = null;
			                On unsuccessful insertion:
			                	if unique key error
			                		res.json({
										'responseCode': error.code,
										'responseDesc': 'unique key error'
			                		});
			                	else
			                		res.json({
										'responseCode': error.code,
										'responseDesc': 'server error'
			                		});
						*/
						res.redirect('/upload');
					});
				});
			}
		})
	}
}