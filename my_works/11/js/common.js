$(function() {

    //SVG Fallback
    if (!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function() {
            return $(this).attr("src").replace(".svg", ".png");
        });
    };

    //E-mail Ajax Send
    //Documentation & Example: https://github.com/agragregra/uniMail
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });



    $("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true,
        dot: false,
        items: 1
    });
    var owl = $('.owl-carousel');
    owl.owlCarousel();
    // Go to the next item
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel', [1000]);
    });
    // Go to the previous item
    $('.customPrevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [1000]);
    });
    // Второй слайдер

    $(".owl-carousel2").owlCarousel({
        loop: true,
        dot: false,
        items: 5,
        margin: 20,        
        responsive: {
            0: {
                items: 1,
				autoWidth: false
            },
            640: {
                items: 1,
				autoWidth: false				
            },
			768: {
                items: 3,
				autoWidth: false			
            },
            1000: {
                items: 4,
				autoWidth: true			
            },
            1600: {
                items: 5,
				autoWidth: true				
            }
        }
    });
    var owl2 = $('.owl-carousel2');
    owl2.owlCarousel();
    // Go to the next item
    $('.customNextBtn2').click(function() {
        owl2.trigger('next.owl.carousel', [700]);
    });
    // Go to the previous item
    $('.customPrevBtn2').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl2.trigger('prev.owl.carousel', [700]);
    });

    // Слайдер окончен

    // По нажатию на кнопку открыть категории

    $(".button_mobile_mnu").click(function() {
        $(".hidden_category").toggle("slow", function() {
            // Animation complete.
        });

    });

    // По нажатию кнопки
    $(".button").click(function() {
        $(".hidden_parners").toggle("slow", function() {
            // Animation complete.
        });

    });

    // По нажатию на ccылки переключаем картинки и делаем активными ссылки на нужных позициях

    $(".social a").click(function(e) {
        e.preventDefault();
        if ($( this ).hasClass("soc_vk")) {
            $(".social_vk_big").show();
            $(".soc_vk").addClass("active");
            $(".soc_fb").removeClass("active");
            $(".soc_tw").removeClass("active");
            $(".social_fb_big").hide();
            $(".social_twit_big").hide();          
        } else if ($( this ).hasClass("soc_fb")) {
            $(".social_fb_big").show();
            $(".soc_fb").addClass("active");
            $(".soc_vk").removeClass("active");
            $(".soc_tw").removeClass("active");
            $(".social_vk_big").hide();
            $(".social_twit_big").hide();
        } else if ($( this ).hasClass("soc_tw")) {
            $(".social_twit_big").show();
            $(".soc_tw").addClass("active");
            $(".soc_fb").removeClass("active");
            $(".soc_vk").removeClass("active");
            $(".social_fb_big").hide();
            $(".social_vk_big").hide();
        }




    });
	// Анимация мобильного меню
	$(".anim1").animated("fadeIn", "");
    // Анимация в футере картинок в соцсетях
    $(".anim2").animated("fadeIn", "");
});
$(window).load(function() {

    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

});
