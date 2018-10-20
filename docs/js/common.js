$(document).ready(function () {
    var windowHeight = $(window).height();
    $(window).on("resize", function (e) {
        windowHeight = $(window).height();
        $(".fullHeight").css("min-height", windowHeight);
        $(".halfHeight").css("min-height", windowHeight * 3 / 4);
    });
    $(window).resize();

    $(window).scroll(function (e) {
        var currentScroll = $(window).scrollTop();
        if (currentScroll > 10) {
            $(".header").addClass("scrolled");
        }
        else {
            $(".header").removeClass("scrolled");
        }
    });

    $("body").on("click", ".header-more", function(e){
        $(".header-menu").toggleClass("show");
    });
});