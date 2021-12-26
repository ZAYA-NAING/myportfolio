$(function () {
    AOS.init();
    $('.nav-link').onePgaeNav({
        wrapper: '#one-page-nav',
        navStop: 100,
    });
    $('.nav').click(function () {
        $('.nav').toggleClass('sp-nav');
    });
});