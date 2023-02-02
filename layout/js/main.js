$(function () {
	// меню гамбургер
	$('.menu-open').click(function () {
		$('.menu-collapse').toggleClass('d-none').css('order', '1');
		$('.menu').toggleClass('menu-open');
	});
	// плавная прокрутка
	$('a.go').click(function (e) {
		e.preventDefault();
		elementClick = $(this).attr('href');
		destination = $(elementClick).offset().top;
		$('body,html').animate({scrollTop: destination }, 800);
	});
	    var $preloader = $('#page-preloader'),
	        $spinner   = $preloader.find('.spinner');
	    $spinner.fadeOut();
	    $preloader.delay(1600).fadeOut('slow');

	// параллакс фона
	$window = $(window);         
	$('[data-type="background"]').each(function() {
	    var $bgobj = $(this); 
	    $(window).scroll(function() {
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
			var coords = '50% '+ yPos + 'px';
			$bgobj.css({ backgroundPosition: coords });
		});
	});
	// модальные окна
	$('.phone-btn').click(function (e) {
		e.preventDefault();
		$('#exampleModal').arcticmodal();
	});
	// слайдер
	$('.slider').slick( {
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>'
	});
});