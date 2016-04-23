(function(){
	//Scrolls to clicked section
	$('.navbar li a').on('click', function(e) {
		event.preventDefault();
		var link = $(this).attr('href');
		
		if (window.innerWidth > 767) {
			$('body, html').animate({scrollTop:($(link).offset().top - 75)}, 500);
		} else {
			$('body, html').animate({scrollTop:($(link).offset().top - 50)}, 500);
		}
	});
	
	//Scrolls thumbnail pic to bottom
	$('.work_thumbnail a').hover(function() {
		var el = $(this).find('img');
		el.css('top', 150 - el.height());
	}, function() {
		$(this).find('img').css('top', 0);
	});
})();
