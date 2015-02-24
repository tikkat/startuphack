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
	//Get all stats for last year section
	stats = $('.statistics > h3');
	//Don't show last four pictures in last year section on mobile
	var pics = $('.last-year > img');
	if(window.innerWidth <= 480) {
		for(var i = 4; i < pics.length; i++) {
			pics[i].style.display = 'none';
		}
	}
	//scroll down on header-arrow click
	$('.arrow-down img').click(function() {
	    $('html, body').animate({
	        scrollTop: $('.intro').offset().top
	    }, 1000);
	});

<<<<<<< Updated upstream
	//change between hack and open track
  	$('.the-day .ghost-btn').click(function(){
=======
  // When clicking on the buttons in the the-day section
  $('.the-day .ghost-btn').click(function(){
>>>>>>> Stashed changes
		if($(this).hasClass('active'))
			return;
		else {
			$('.the-day .ghost-btn').each(function () {
				$(this).toggleClass('active');
		  });
    }
	});

  	//Don't show last four pictures in last year section on resize to small
	$(window).resize(function() {
		if (window.innerWidth <= 480 && pics[4].style.display != 'none') {
			for(var i = 4; i < pics.length; i++) {
				pics[i].style.display = 'none';
			}
		}
		//show them again if bigger screen
		else if (window.innerWidth > 480 && pics[4].style.display == 'none') {
			for(var i = 4; i < pics.length; i++) {
				pics[i].style.display = 'inline';
			}
		}
	});

	//pirallax
	$(window).bind('scroll',function(e){
   		parallaxScroll();
   	});
 
   	function parallaxScroll(){
   		yStart = $('.ocean-break').offset().top - $(window).scrollTop();
   		var scrolledY = window.innerHeight - yStart - (window.innerHeight/100)*35;
		$('.ocean-break img').css('left', ((scrolledY)/7)+'vw');
   	}
});

var statsDone = false;
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
		   	}, 30)
		})(0);  
	}
	// if (isScrolledIntoView('.ocean-break')) {
	// 	console.log($('.ocean-break img'));
	// 	$('.ocean-break img').animate({left: '+=150px'});
	// };

});
