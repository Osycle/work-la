
$(document).ready(function(){


	/*FANCYBOX*/
	if ($("[data-fancybox]").length != 0)
		$("[data-fancybox]").fancybox({
			afterShow: function(instance, current) {},
			animationEffect : "zoom",
			animationDuration : 800,
			thumbs : {
				autoStart   : true
			},
			touch : false,
			transitionDuration : 366,
			transitionEffect: "zoom-in-out"
		});

	/*Подключение owl carousel*/
	$('.offers-carousel').owlCarousel({
	    loop: true, // Зациклирование
	    margin: 0, // Отступы
	    nav: true, // Навигация
	    dots: true, // Точки
	    navText: [
	    	'<span class="flickity_text">Пред.</span><span class="rot icmarrow-pointing-to-right"></span>',
	    	'<span class="icmarrow-pointing-to-right"></span><span class="flickity_text">След.</span>'
	    	],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:3
	        }
	    }
	})

	




});









console.log("end script");