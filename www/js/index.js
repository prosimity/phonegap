/**
 * Prosimity Bootstrap
 *
 * @author chris Santos
 */
document.addEventListener('deviceready', function() {
    new Router();
    Backbone.history.start({pushState: false});

    $(document).ready(function() {
        $(document).foundation();
        $('.profiles').slick({
            infinite: false,
            useCSS: false,
            cssEase: false,
            swipeToSlide: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    });
}, false);

// Application Constants
TEMPLATES_DIR = 'js/app/templates'