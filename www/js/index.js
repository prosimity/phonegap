/**
 * Prosimity Bootstrap
 *
 * @author chris Santos
 */
document.addEventListener('deviceready', function() {

    var animating = false;
    var current_slide = null;

    new Router();
    Backbone.history.start({pushState: false});

    $(document).ready(function() {
        $(document).foundation();

        var swiper = new Swiper ('.swiper-container', {
            loop: false,
            freeModeSticky: true,
            speed: 500
        });

        swiper.on('onSliderMove', function () {

            animating = true;

            if(current_slide) {
                $(current_slide).draggable('destroy');
                current_slide = null;
            }
        });

        swiper.on('onSlideChangeEnd', function () {

            animating = false;

            current_slide = $('.swiper-slide-active');
            current_slide.draggable({
                axis: 'y',
                revert: true,
                revertDuration: 200,
                drag: function(event, ui) {

                    if(animating) {
                        return false;
                    }
                }
            });
        });

        swiper.on('onTransitionEnd', function () {

            console.log('trans');

            animating = false;

            current_slide = $('.swiper-slide-active');
            current_slide.draggable({
                axis: 'y',
                revert: true,
                revertDuration: 200,
                drag: function(event, ui) {

                    if(animating) {
                        return false;
                    }
                }
            });
        });
    });
}, false);

// Application Constants
TEMPLATES_DIR = 'js/app/templates'

// Handlebars Templates TODO: Have these precompiled through GruntJS for Production
function loadTemplate() {
    $.ajax({
        url: filename,
        async: false,
        success: function (HTML) {
            self._template = Handlebars.compile(HTML);
        },
        error: function () {
            throw 'There was an error loading template: ' + filename;
        }
    });
}
Handlebars.registerPartial('menus', null);