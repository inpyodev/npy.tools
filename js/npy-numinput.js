/*
	title	: npy-numinput.js
	version	: 20171126
	license	: GPLv3
	author	: Inpyo Jeon (inpyodev@gmail.com)
*/

(function($){
	$.fn.npyNumInput = function(options){
		var opt = $.extend({
			addCommas	: true, // true, false
			alignRight	: true // true, false
		}, options);
		
		return this.each(function(){
			var $obj = $(this);
			
			$obj.on('keyup change', mask);
			if (opt.alignRight) $obj.css({ textAlign: 'right' });
			
			function mask(){
				$obj.val($obj.val().replace(/\D/g, ''));
				$obj.attr('value', $obj.val());
				
				if (opt.addCommas) mark();
			}
			
			function mark(){
				$obj.val($obj.val().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
			}
		});
	};
}(jQuery));

// Get value of the input by "[object].attr('value')", not "[object].val()" or [element].value