/*!
 * jQuery rollover css
 * Original author: @bluebox
 * Licensed under the MIT license
 * version : 0.1
 */

(function($) {

    $.fn.rollover = function(options) {

        var settings = $.extend({
            opacity: 0,
            duration: 300,
            over: '_hover'
        }, options);

        this.each(function() {
            var img = jQuery(this).find('img'),
                src = img.attr('src'),
                reg = new RegExp(settings.over),
                imgH = img.height(),
                imgW = img.width();

            if (src.match(reg)) return;

            // console.log(img, src, imgH, imgW)
            var _hover = src.replace(/\.\w+$/, settings.over + '$&');
            $(this).css({
                'background': 'url(' + _hover + ') no-repeat 0 0',
                'width': imgW,
                'height': imgH,
                'display': 'block'
            }).hover(
                function() {
                    // $(this).find('img').stop(true).fadeTo(settings.duration, settings.opacity);
                    $(this).find('img').stop(true).animate({
                        'opacity': settings.opacity
                    }, settings.duration);
                },
                function() {
                    // $(this).find('img').stop(true).fadeTo(settings.duration, 1);
                    $(this).find('img').stop(true).animate({
                        'opacity': '1'
                    }, settings.duration);
                }
            );
        });

        return this;
    };

}(jQuery));

$('nav li a').rollover({
    opacity: 0,
    duration: 700
});