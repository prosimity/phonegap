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
        $('.card-container').slick({
            arrows: false,
            infinite: false,
            useCSS: false,
            cssEase: false,
            swipeToSlide: true,
            slidesToShow: 1,
            slidesToScroll: 3
        });
        $('.card-container .card').draggable({axis: 'y'});
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