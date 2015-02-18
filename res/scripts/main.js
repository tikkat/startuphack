$(document).ready(function() {
		console.log($('arrow-down'));
	$('.arrow-down').click(function() {
	    $('html, body').animate({
	        scrollTop: $('.intro').offset().top
	    }, 1000);
	});
});