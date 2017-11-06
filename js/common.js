$(document).ready(function() {
	
	//При нажатии на кнопку с классом .button, добавляет класс active

	$('.button').click(function(e){
	e.preventDefault();	$(this).toggleClass('active');
	$(this).next().slideToggle();
	//в появишемся меню, при нажатии на ссылку, убирает меню 
 	$(".menu_navbar ul li a").click(function() {
		$(".menu_navbar").fadeOut(600);
		$(".button").toggleClass("active");
	});		
});

	$(window).load(function() {
	//загрузчик  
	$(".loader_inner").fadeOut();
	$(".loader").delay(600).fadeOut("slow");
		// код загрузчика 
    function getRandom(size) {
        return Math.floor(Math.random() * size);
    }

    //Creating the layers for the stars
    for (i = 2; i < 12; i++) {
        $("#stars").append('<div class="star_layer" style="transform: translateZ(' + i + 'px) scale(' + (15 - i) / (15) + ');"></div>')
    }

    //Creating the stars
    for (i = 0; i < 70; i++) {
        $(".star_layer").eq(getRandom(10)).append('<div class="star"></div>');
    }

    updateStars();

    //Change stars every cycle
    setInterval(updateStars, 4000);

    //Randomising stars. Position and opacity is changed every cycle.
    function updateStars() {
        $(".star").each(function() {
            $(this).css({ "top": getRandom(200) + "px", "left": getRandom(200) + "px", "opacity": (20 + getRandom(50)) / 100 });
        });
    }
    // Конец кода загрузчика
	//анимации
	$(".anim_left").animated("slideInLeft");
	$(".main_head h1").animated("fadeInDown", "fadeOutUp");
	$(".my_photo img").animated("zoomIn");
	$(".anim").animated("slideInRight");
	$(".an").animated("slideInRight");
		
});	

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		}
	}, {offset: 100});
	// скролл по ссылке с атрибутом href
	$(".menu_navbar a[href*='#']").on("click", function(e) {
	    e.preventDefault();
	    var anchor = $(this);
	    $('html, body').stop().animate({
	        scrollTop: $(anchor.attr('href')).offset().top
	    }, 500);
	    return false;
	});
	$(".up a[href*='#']").on("click", function(e) {
	    e.preventDefault();
	    var anchor = $(this);
	    $('html, body').stop().animate({
	        scrollTop: $(anchor.attr('href')).offset().top
	    }, 500);
	    return false;
	});
	$(".main_head a[href*='#']").on("click", function(e) {
	    e.preventDefault();
	    var anchor = $(this);
	    $('html, body').stop().animate({
	        scrollTop: $(anchor.attr('href')).offset().top
	    }, 1500);
	    setTimeout(function () {
			$('html, body').stop().animate({
				scrollTop: $('.bottom_section').offset().top
			}, 15000);
			return false;
		}, 1500)
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		navigation : false, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		itemsDesktop : false,
     	itemsDesktopSmall : false,
		itemsTablet: false,
		itemsMobile : false,
		autoPlay : true,
    	stopOnHover : true
	});
	owl.on(".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});