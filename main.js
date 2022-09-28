$(function () {
    AOS.init();

    $('.nav-link').onePageNav({
        wrapper: '#one-page-nav',
        navStart: window.innerHeight / 2.5,
    });
    $('.nav img').click(function () {
        $('.nav').toggleClass('sp-nav');
    });
});
