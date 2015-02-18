$(document).ready(function() {
	$('.arrow-down img').click(function() {
	    $('html, body').animate({
	        scrollTop: $('.intro').offset().top
	    }, 1000);
	});
});