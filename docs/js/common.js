$(document).ready(function () {
    var windowHeight = $(window).height();
    $(window).on("resize", function (e) {
        windowHeight = $(window).height();
        $(".fullHeight").css("min-height", windowHeight);
        $(".halfHeight").css("min-height", windowHeight / 5 * 2);

        var contentCenter = $(".content-center");
        for (i = 0; i < contentCenter.length; i++) {
            if ($($(contentCenter[i]).find("div")[0]).height() + 100 >= $(contentCenter[i]).height()) {
                $(contentCenter[i]).css("min-height", $(contentCenter[i]).height() + 100);
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