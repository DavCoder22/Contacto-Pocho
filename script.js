// JavaScript
$(document).ready(function () {
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop() + $(window).height();
        var cardPosition = $('.dentist-card').offset().top;

        if (scrollPosition > cardPosition) {
            $('.dentist-card').addClass('card-show');
        } else {
            $('.dentist-card').removeClass('card-show');
        }
    });
});
