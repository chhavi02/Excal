<<<<<<< HEAD
(function(d, $) {
	var DOM = {
		empCode: $('#empCode'),
<<<<<<< HEAD
		phoneNumber: $('#phoneNumber'),
		password: $('#password'),
		confirmPassword: $('#confirmPassword'),
		registerForm: $('.registerForm')
=======
		contact: $('#contact')
>>>>>>> 4c88bc945a61bf2cf2750851020503e195f43fb1
	},
	Functions = {
		submitRegisterForm: function(event) {
			if(DOM.password.val() != DOM.confirmPassword.val()) {

			} else {
				console.log($(this).attr('action'));
				console.log($(this).serialize());
				$.post($(this).attr('action'), $(this).serialize(), function(json) {
					console.log(json);
                    if (json.responseCode === 1) {
                    /*    DOM.errorBox.css('position', 'absolute');
                        DOM.errorBox.css('visibility', 'visible');
                        DOM.errorMessage.html('Please select captcha');*/
                        DOM.password.val('');
                        DOM.confirmPassword.val('');
                        return false;
                    } else if (json.responseCode === 2) {
                        /*DOM.errorBox.css('position', 'absolute');
                        DOM.errorBox.css('visibility', 'visible');
                        DOM.errorMessage.html('Failed Captcha Verification. Refreshing page in 5s.');*/
                        setTimeout(function () {
                            location.reload();
                        }, 10000);
                    } else if (json.responseCode == 23505) {
                        /*DOM.errorBox.css('position', 'absolute');
                        DOM.errorBox.css('visibility', 'visible');
                        DOM.errorMessage.html('User with Employee ID already exists.');*/
                        return false;
                    } else {
                        // window.location.replace('http://localhost:3000');
                        $(location).attr('href', 'http://localhost:3000');
                    }
				}, 'json');
			return false;
			}
		}
	}, Variables = {

	}

	$(d).ready(function() {
		DOM.empCode.kendoMaskedTextBox({
			mask: '0000'
		});

		DOM.contact.kendoMaskedTextBox({
			mask: '(91) 00000-00000'
		});
		DOM.registerForm.submit(Functions.submitRegisterForm);


	});

=======
(function(d, $) {
	var DOM = {
		empCode: $('#empCode'),
		password: $('#password'),
		confirmPassword: $('#confirmPassword'),
		registerForm: $('.registerForm'),
		contact: $('#contact')
	},
	Functions = {
		submitRegisterForm: function(event) {
			if(DOM.password.val() != DOM.confirmPassword.val()) {

			} else {
				console.log($(this).attr('action'));
				console.log($(this).serialize());
				$.post($(this).attr('action'), $(this).serialize(), function(json) {
					console.log(json);
                    if (json.responseCode === 1) {
                    /*    DOM.errorBox.css('position', 'absolute');
                        DOM.errorBox.css('visibility', 'visible');
                        DOM.errorMessage.html('Please select captcha');*/
                        DOM.password.val('');
                        DOM.confirmPassword.val('');
                        return false;
                    } else if (json.responseCode === 2) {
                        /*DOM.errorBox.css('position', 'absolute');
                        DOM.errorBox.css('visibility', 'visible');
                        DOM.errorMessage.html('Failed Captcha Verification. Refreshing page in 5s.');*/
                        setTimeout(function () {
                            location.reload();
                        }, 10000);
                    } else if (json.responseCode == 11000) {
                        /*DOM.errorBox.css('position', 'absolute');
                        DOM.errorBox.css('visibility', 'visible');
                        DOM.errorMessage.html('User with Employee ID already exists.');*/
                        return false;
                    } else {
                        // window.location.replace('http://localhost:3000');
                        $(location).attr('href', 'http://localhost:3000');
                    }
				}, 'json');
			return false;
			}
			return false;
		}
	}, Variables = {

	}

	$(d).ready(function() {
		console.log('ready');
		console.log(DOM.empCode.val());
		DOM.empCode.kendoMaskedTextBox({
			mask: '0000'
		});

		DOM.contact.kendoMaskedTextBox({
			mask: '(91) 00000-00000'
		});
		DOM.registerForm.submit(Functions.submitRegisterForm);


	});

>>>>>>> 2905068d253c8e37be94e62479d890d2b036083d
})(document, jQuery);