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
				$('.message').html('Passwords do not match.');
				$('.alert').css('visibility', 'visible');
				$('.alert').css('position', 'static');
				return false;
			} else {
				$('.alert').css('position', 'absolute');
				$('.alert').css('visibility', 'hidden');
				$.post($(this).attr('action'), $(this).serialize(), function(json) {
					console.log(json);
                    if (json.responseCode === 1) {
                    	$('.alert').css('position', 'static');
                    	$('.message').html('Please select captcha.');
						$('.alert').css('visibility', 'visible');
                        DOM.password.val('');
                        DOM.confirmPassword.val('');
                        return false;
                    } else if (json.responseCode === 2) {
                    	$('.alert').css('position', 'static');
                    	$('.message').html('Failed captcha verification. Refreshing page in 5s.');
						$('.alert').css('visibility', 'visible');
                        setTimeout(function () {
                            location.reload();
                        }, 10000);
                    } else if (json.responseCode == 11000) {
                    	$('.alert').css('position', 'static');
                    	$('.message').html('User with employee ID already exists.');
						$('.alert').css('visibility', 'visible')
                        return false;
                    } else {
                        $(location).attr('href', 'http://localhost:3000');
                        // return false;
                    }
                    return false;
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
})(document, jQuery);