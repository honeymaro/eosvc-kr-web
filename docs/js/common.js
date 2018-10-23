$(document).ready(function () {
    var windowHeight = $(window).height();
    $(window).on("resize", function (e) {
        windowHeight = $(window).height();
        $(".fullHeight").css("min-height", windowHeight);
        $(".halfHeight").css("min-height", windowHeight * 3 / 4);

        var contentCenter = $(".content-center");
        for (i = 0; i < contentCenter.length; i++) {
            if ($($(contentCenter[i]).find("div")[0]).height() * 1.2 > windowHeight) {
                $(contentCenter[i]).css("min-height", $(contentCenter[i]).height() * 1.2);
            }
        }
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

    $("body").on("click", ".header-more", function (e) {
        $(".header-menu").toggleClass("show");
    });
});