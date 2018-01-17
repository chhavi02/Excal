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
			mask: '(91) 00000-00000'
		});
	});

})(document, jQuery);