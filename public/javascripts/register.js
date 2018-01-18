(function(d, $) {
	var DOM = {
		empCode: $('#empCode'),
		contact: $('#contact')
	},
	Functions = {

	}

	$(d).ready(function() {
		DOM.empCode.kendoMaskedTextBox({
			mask: '0000'
		});

		DOM.contact.kendoMaskedTextBox({
			mask: '(91) 00000-00000'
		});
	});

})(document, jQuery);