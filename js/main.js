$(document).ready(function(){
  $('.single-item').slick({
		arrows: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
    prevArrow:'<img class="arrows prevarrow" src="img/prevarrow.svg" alt="prevarrow">',
    nextArrow:'<img src="img/nextarrow.svg" alt="nextarrow" class="arrows nextarrow">'
  });
});