$(document).ready(function() {
    //Срабатывание кнопки Связаться с нами
    $(".email_p a").click(function(e) {
        e.preventDefault();
        $(".popup").addClass("active");
    });
    $(".btn-close").click(function(e) {
        e.preventDefault();
        $(".popup").removeClass("active");
    });

    // Hover событие на ссылках календарь и email
    $(".calendar_p a").hover(function(e) {

            $(".calendar_i").addClass("calendar_i_hover");

        },
        function() {
            $(".calendar_i").removeClass("calendar_i_hover");
        });
    $(".email_p a").hover(function(e) {

            $(".email_i").addClass("email_i_hover");

        },
        function() {
            $(".email_i").removeClass("email_i_hover");
        });
});
