$(function() {
   
   

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

    //чтобы картинки нельзя было двигать

    $("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true,        
        dot: false,
        autoWidth: true,
        margin: 4,
        items: 1,
        responsive: {
            0: {
                items: 1,
				center: false,
            },
            640: {
                items: 1,
				center: false,				
            },
			768: {
                items: 2,
				center: true,			
            },
            1000: {
                items: 2,
				autoWidth: true,
				center: true,			
            },
            1600: {
                items: 3,
				autoWidth: true,
				center: true,				
            }
        }
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
        items: 3,
        margin: 13,
        center: false,
        autoWidth: true,
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
                items: 1,
				autoWidth: false			
            },
            1000: {
                items: 3,
				autoWidth: true			
            },
            1600: {
                items: 3,
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

     //Срабатывание кнопки Связаться с нами
    $(".footer_btn").click(function(e) {
        e.preventDefault();
        $(".popup").addClass("active");
    });
    $(".btn-close").click(function(e) {
        e.preventDefault();
        $(".popup").removeClass("active");
    });

 	// Анимация 
    $(".anim").animated("fadeIn", "");
    $(".anim2").animated("fadeIn", "fadeOut");
});
$(window).load(function() {

    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

});
