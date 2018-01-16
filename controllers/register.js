var bcrypt = require('bcrypt');

exports.registerPOST = function(req, res) {
	console.log(req.body);
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