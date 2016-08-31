$(document).ready(function() {
    jQuery(window).scroll(function() {
        if (jQuery(window).scrollTop() > jQuery(".top_menu").height() + 930) {
            jQuery(".top_menu").addClass("fixed");
        } else {
            jQuery(".top_menu").removeClass("fixed");

        }
    });
    //Таймер обратного отсчета
    //Документация: http://keith-wood.name/countdown.html
    //<div class="countdown" date-time="2015-01-07"></div>
    var austDay = new Date($(".countdown").attr("date-time"));
    $(".countdown").countdown({
        until: austDay,
        format: 'yowdHMS'
    });
    

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
        };
    }, {
        offset: 100
    });

    //Плавный скролл до блока .div по клику на .scroll
    //Документация: https://github.com/flesler/jquery.scrollTo

    $("a.scroll").click(function() {
        $.scrollTo($(".mid_sec"), 1500, {
            offset: -0
        });
    });
    $("a.scroll1").click(function() {
        $.scrollTo($(".our_team"), 1500, {
            offset: -0
        });
    });
    $("a.scroll2").click(function() {
        $.scrollTo($("header"), 1500, {
            offset: -0
        });
    });
    $("a.scroll3").click(function() {
        $.scrollTo($(".follow"), 1500, {
            offset: 195
        });
    });
    $("a.scroll4").click(function() {
        $.scrollTo($(".btn_blog"), 1500, {
            offset: -0
        });
    });
    $("a.scroll5").click(function() {
        $.scrollTo($(".call_us"), 1500, {
            offset: -0
        });
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
