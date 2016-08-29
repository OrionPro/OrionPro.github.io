$(document).ready(function() {
     $(window).load(function() {
	//загрузчик  
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
		
});	  
    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    }
    // чтобы вартинки нельзя было мышкой двигать

    $("img, a").on("dragstart", function(event) {
        event.preventDefault();
    });

    //обработчик кнопки на нажатие

    $("#nav-button-label").click(function(e){
    e.preventDefault();
     $(this).toggleClass('nav-on');     // добавляет класс для анимации самой кнопки
     $(this).next().slideToggle();      // открывает меню main_nav_block, которое было скрыто
          
    });
});
