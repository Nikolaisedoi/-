//slider
$(document).ready(function(){
  $('.gallery-slider').slick({
    arrows: true,
		infinite: true,
		prevArrow: '<button type = "button" class = "slick-btn slick-prev"><img src="img/prevarrow.svg" alt="prevarrow" /></ button>',
    nextArrow: '<button type = "button" class = "slick-btn slick-next"><img src="img/nextarrow.svg" alt="nextarrow" /></ button>',
  });



//gallery
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
	});



//popup-video
	$('.popup-link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});


// burger-menu
//header
	$('.menu-burger-btn').on('click', function(e){
		$('.menu-burger-btn, .menu-list').toggleClass('active');
	});

//footer
	$('.button-burger_group').on('click', function(){
		$('.footer_menu-burger-btn, .footer-menu_list').toggleClass('footer-menu_list-active');
	});
});



 	 