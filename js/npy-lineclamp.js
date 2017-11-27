/*
	title	: npy-lineclamp.js
	version	: 20170731
	license	: GPLv3
	author	: Inpyo Jeon (inpyodev@gmail.com)
*/

function npyLineClamp() {
	$('.npy-lineclamp').each(function(){
		var obj = $(this);
		var txt = obj.text();
		var lns = obj.data('lines');
		var lnh = parseInt(obj.css('line-height'));
		var obh = 0, i = 0, rst = '';
		
		obj.text('');
		
		while(obh <= lnh * lns) {		
			if (txt.charAt(i)) {
				rst += txt.charAt(i);
			} else break;
			
			obj.text(rst+'...');
			obh = obj.height();
			
			i++;
		}
		
		if (rst.length < txt.length) {
			rst = rst.slice(0,-1);
			obj.text(rst+'...');
		} else obj.text(txt);
	});	
}