(function ($) {

    $.fn.onePageNav = function (options) {

        const settings = $.extend({
                activeClass: 'active',
                wrapper: '',  // Nav wrapper selector for scroll effect
                speed: 900,   // animation speed
                navStop: 50,  // stop before top
                navStart: 200, // change class before navstart pixel
            }, options),
            navLink = $(this),
            targetOffsetTops = [];

        navLink.on('click', clickScroll);

        if (settings.wrapper) {
            navLink.each(function (index, navLinkElement) {
                targetOffsetTops.push($($(navLinkElement).attr('href')).offset().top);
            });
            $(window).on('scroll', function () {
                const windowTop = $(window).scrollTop();
                setTimeout(function() {
                    $(targetOffsetTops).each(function (index, targetOffsetTops) {
                        if (windowTop > targetOffsetTops - settings.navStart) {
                            navLink.removeClass(settings.activeClass)
                                .eq(index).addClass(settings.activeClass);
                        }
                    });
                }, 250);
            }).trigger('scroll');
        }

        function clickScroll(event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top - settings.navStop
            }, settings.speed);
        }
    };

}(jQuery));
