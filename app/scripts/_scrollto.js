(function($){
	'use strict';
	$('.top-nav').on('click', 'a', function (event) {
		event.preventDefault();
		let anchor = $(this).attr('href');
		let scrollTo = $(anchor).offset().top;
		$('body, html').animate({scrollTop: scrollTo}, 1000);
	});
})(jQuery);