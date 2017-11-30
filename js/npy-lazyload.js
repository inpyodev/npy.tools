/*
	title	: npy-lazyload.js
	version	: 20171127
	license	: GPLv3
	author	: Inpyo Jeon (inpyodev@gmail.com)
*/

(function($){
	$.fn.npyLazyload = function(options){
		var _windowHeight = parseInt($(window).height());
		
		return this.each(function(){
			var $obj = $(this);
			var _src = $obj.data('src');
			var _thisHeight = $obj.height();
			
			$(document).on('scroll', lazyLoad);
			$(window).on('load', lazyLoad);
			
			function lazyLoad(){
				var _windowTop = parseInt($(window).scrollTop());
				var _thisTop = parseInt($obj.offset().top);
				
				if (_thisTop < _windowTop + _windowHeight && _thisTop + _thisHeight > _windowTop) $obj.attr('src', _src);
			}
		});
	};
}(jQuery));