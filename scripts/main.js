function isScrolledIntoView(elem) {
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
} 

var stats;
$(document).ready(function() {
	stats = $('.statistics > h3');
	$('.arrow-down img').click(function() {
	    $('html, body').animate({
	        scrollTop: $('.intro').offset().top
	    }, 1000);
	});
<<<<<<< Updated upstream
});


var statsDone = false;
console.log(stats);
$(document).on('scroll', function() {
	if (isScrolledIntoView('.statistics') && !statsDone) {
		(function countStats(i) {
			statsDone = true;         
			setTimeout(function () {
		   		if (i<27) {
					stats[0].innerHTML=i+1;
				}
				if (i<127) {
					stats[1].innerHTML=i+1;
				}
				if (i<1) {
					stats[2].innerHTML=i+1;
				}
				if (i<300) {
					stats[3].innerHTML=i+2;
				}
				i = i+2;
				if (i<300) countStats(i);
		   	}, 10)
		})(0);  
	}
})
=======

	$('.the-day .ghost-btn').click(function(){
		if($(this).hasClass('active'))
			return;
		else
			$('.the-day .ghost-btn').each(function () {
				$(this).toggleClass('active');
		});
	});
});
>>>>>>> Stashed changes
