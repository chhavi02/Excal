(function(d, $) {
	var DOM = {
		empCode: $('#empCode'),
		phoneNumber: $('#phoneNumber'),
		password: $('#password'),
		confirmPassword: $('#confirmPassword'),
		registerForm: $('.registerForm')
	},
	Functions = {
		submitRegisterForm: function(event) {
			if(DOM.password.val() != DOM.confirmPassword.val()) {

			} else {
				// alert('Request');
				console.log($(this).serialize());
				$.ajax($(this).attr('action'), $(this).serialize(), function(json) {
					console.log(json);
                    if (json.responseCode === 1) {
                        DOM.errorBox.css('position', 'absolute');
                        DOM.errorBox.css('visibility', 'visible');
                        DOM.errorMessage.html('Please select captcha');
                        DOM.password.val('');
                        DOM.confirmPassword.val('');
                        return false;
                    } else if (json.responseCode === 2) {
                        DOM.errorBox.css('position', 'absolute');
                        DOM.errorBox.css('visibility', 'visible');
                        DOM.errorMessage.html('Failed Captcha Verification. Refreshing page in 5s.');
                        setTimeout(function () {
                            location.reload();
                        }, 10000);
                    } else if (json.responseCode == 23505) {
                        DOM.errorBox.css('position', 'absolute');
                        DOM.errorBox.css('visibility', 'visible');
                        DOM.errorMessage.html('User with Employee ID already exists.');
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

		DOM.phoneNumber.kendoMaskedTextBox({
			mask: '(999) 000-0000'
		});
		DOM.registerForm.submit(Functions.submitRegisterForm);


	});

})(document, jQuery);