//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar-fixed-top").removeClass("top-nav-expand");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-fixed-top").addClass("top-nav-expand");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    "use strict"; // Start of use strict
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').finish().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
