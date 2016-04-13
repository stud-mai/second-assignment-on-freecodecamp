(function(){
	$('.navbar li a').on('click', function(e) {
		event.preventDefault();
		
		var link = $(this).attr('href');
		
		if (window.innerWidth > 767) {
			$('body, html').animate({scrollTop:($(link).offset().top - 75)}, 500);
		} else {
			$('body, html').animate({scrollTop:($(link).offset().top - 50)}, 500);
		}
			
	});
})();