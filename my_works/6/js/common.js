$(document).ready(function() {
    // Чтобы при наведении, в секции Pricing Table, на блоки ultimate_box и прочие срабатывал hover и на другие элементы
    // На блок ultimate_box
    $(".ultimate_box").hover(function() {
        $(".ultimate_box .box_head").css({
            backgroundColor: "#0199e6",
            fontWeight: "bolder"
        });
        $(".ultimate_box .box_head span").css({
            color: "#fff"
        });
        $(".ultimate_box .table_btn").css({
            backgroundColor: "#0199e6",
            color: "#fff",
            border: "none"
        });
    }, function() {
        var cssObj = {
            backgroundColor: "#323232",
            fontWeight: "",
            color: "#0199e6"

        };

        $(".ultimate_box .box_head").css(cssObj);
        $(".ultimate_box .box_head span").css({
            backgroundColor: "",
            color: "#0199e6"
        });
        $(".ultimate_box .table_btn").css({
            backgroundColor: "",
            color: "",
            border: ""
        });
    });
    //  На блок premium_box
    $(".premium_box").hover(function() {
        $(".premium_box .box_head").css({
            backgroundColor: "#0199e6",
            fontWeight: "bolder"
        });
        $(".premium_box .box_head span").css({
            color: "#fff"
        });
        $(".premium_box .table_btn").css({
            backgroundColor: "#0199e6",
            color: "#fff",
            border: "none"
        });
    }, function() {
        var cssObj = {
            backgroundColor: "#323232",
            fontWeight: "",
            color: "#0199e6"

        };
        $(".premium_box .box_head").css(cssObj);
        $(".premium_box .box_head span").css({
            backgroundColor: "",
            color: "#0199e6"
        });
        $(".premium_box .table_btn").css({
            backgroundColor: "",
            color: "",
            border: ""
        });
    });
    // На блок basic_box
    $(".basic_box").hover(function() {
        $(".basic_box .box_head").css({
            backgroundColor: "#0199e6",
            fontWeight: "bolder"
        });
        $(".basic_box .box_head span").css({
            color: "#fff"
        });
        $(".basic_box .table_btn").css({
            backgroundColor: "#0199e6",
            color: "#fff",
            border: "none"
        });
    }, function() {
        var cssObj = {
            backgroundColor: "#323232",
            fontWeight: "",
            color: "#0199e6"

        };
        $(".basic_box .box_head").css(cssObj);
        $(".basic_box .box_head span").css({
            backgroundColor: "",
            color: "#0199e6"
        });
        $(".basic_box .table_btn").css({
            backgroundColor: "",
            color: "",
            border: ""
        });
    });
    // Активация меню по кнопке
    $(".menu-button").click(function() {

        $(".top_menu").toggleClass("top_menu_open");
    });
    // при нажатии на ссылки top_menu, убирает всё меню (убирает глюк с opacity)
    $(".scroll1, .scroll2, .scroll3, .scroll4, .scroll5").click(function() {

        $(".top_menu").removeClass("top_menu_open");
    });

    // Чтобы появилось при скролле верхнее меню

    $(window).scroll(function() {
        if ($(window).scrollTop() > $(".top_menu").height() + 330) {
            $(".top_menu").addClass("fixed");
            $(".menu-button").css({
                zIndex: "-999",
                position: "absolute"
            });
            $(".top_menu").removeClass("top_menu_open");

            $('.top_menu').fadeIn(300);
        } else {
            $('.top_menu').fadeOut(300);
            $(".menu-button").css({
                zIndex: "999",
                position: "fixed"
            });
            $(".top_menu_open").css({
                display: "none"

            });
        }
    });
    // При скроле убирает класс top_menu_open (глюк с opacity)
    $(window).scroll(function() {
        if ($(window).scrollTop() > $(".top_menu").height() + 1) {

            $(".top_menu").removeClass("top_menu_open");


        }

    });
    //Анимация при загрузке
    $(window).load(function() {
        $(".loading").fadeOut();
        $("#wrap").delay(400).fadeOut("slow");

        $(".anim").animated("slideInRight", "");
        $(".anim_left").animated("slideInLeft", "");

    });

    //Таймер обратного отсчета
    //Документация: http://keith-wood.name/countdown.html
    //<div class="countdown" date-time="2015-01-07"></div>
    var austDay = new Date($(".countdown").attr("date-time"));
    $(".countdown").countdown({
        until: austDay,
        format: 'yowdHMS'
    });

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
    }, {
        offset: 100
    });

    //Плавный скролл до блока .div по клику на .scroll
    //Документация: https://github.com/flesler/jquery.scrollTo
    $("a.scroll").click(function() {
        $.scrollTo($("header"), 1500, {
            offset: -0
        });
    });
    $("a.scroll1").click(function() {
        $.scrollTo($(".landx_features"), 1500, {
            offset: -0
        });
    });
    $("a.scroll2").click(function() {
        $.scrollTo($(".pricing_table"), 1500, {
            offset: -0
        });
    });
    $("a.scroll3").click(function() {
        $.scrollTo($(".product_screenshots"), 1500, {
            offset: -0
        });
    });
    $("a.scroll4").click(function() {
        $.scrollTo($(".trusted_by"), 1500, {
            offset: -0
        });
    });
    $("a.scroll5").click(function() {
        $.scrollTo($(".question_contact"), 1500, {
            offset: -0
        });
    });
    //Каруселька
    //Документация: http://owlgraphic.com/owlcarousel/
    var owl = $(".carousel");
    owl.owlCarousel({
        items: 3,
        margin: 25,
        smartSpeed: 750
    });

    //Кнопка "Наверх"
    //Документация:
    //http://api.jquery.com/scrolltop/
    //http://api.jquery.com/animate/
    $("#top").click(function() {
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
