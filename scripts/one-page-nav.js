(function ($) {

    $.fn.onePageNav = function (options) {

        const settings = $.extend({
                activeClass: 'active',
                wrapper: '',  // Nav wrapper selector for scroll effect
                speed: 900,   // animation speed
                navStop: 50,  // stop before top
                navStart: 200, // change class before navstart pixel
            }, options),
            $that = $(this);

        $that.on('click', clickScroll);

        if (settings.wrapper) {
            $(window).on('scroll', function () {
                const windowTop = $(window).scrollTop();
                $that.each(function (index) {
                    if (windowTop > $($(this).attr('href')).offset().top - settings.navStart) {
                        $that.removeClass(settings.activeClass)
                            .eq(index).addClass(settings.activeClass);
                    }
                });
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
