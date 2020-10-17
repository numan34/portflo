$(document).ready(function () {

    //veno box plugin
    $('.venobox').venobox();

    // slick slider			

    $('.service_slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 800,
        nextArrow: ".pointer-cont-left",
        prevArrow: ".pointer-cont-right",
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
        },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
        }
      ]
    });

    // testimonial slider

    $('.testimonial-slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 800,
        nextArrow: ".arr-left",
        prevArrow: ".arr-right",
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 479,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		  ]
    });

    //backtop button

    $(window).scroll(function () {
        var windoscroll = $(window).scrollTop();

        if (windoscroll > 800) {
            $('.backtop').fadeIn(1000);
        } else {
            $('.backtop').fadeOut(1000);
        }
    });

    $(".backtop").click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500)
    });


    //nav scroll
   //scrollspy menu
	$('body').scrollspy({
		target: '.custome_nav',
		offset: 50
	});

    //animation scroll js
    $('ul li a').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 40
                }, 1000);
                return false;
            }
        }
    });


    // fixed nav

    var OfsetTop = $('.custome_nav').offset().top;

    //alert(OfsetTop);

    $(window).on('scroll', function () {
        var scroltop = $(window).scrollTop();

        if (scroltop > OfsetTop) {
            $('.custome_nav').addClass('stky');

        } else {
            $('.custome_nav').removeClass('stky');
        }

    });





});
