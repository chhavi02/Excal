(function(d, $) {
	var DOM = {
		empCode: $('#empCode'),
		phoneNumber: $('#phoneNumber')
	},
	Functions = {

	}


	$(d).ready(function() {
		DOM.empCode.kendoMaskedTextBox({
			mask: '0000'
		});

		DOM.phoneNumber.kendoMaskedTextBox({
			mask: '(999) 000-0000'
		});
	});

})(document, jQuery);