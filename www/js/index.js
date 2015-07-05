/**
 * Prosimity Bootstrap
 *
 * @author chris Santos
 */
document.addEventListener('deviceready', function() {
    new Router();
    Backbone.history.start({pushState: false});
}, false);

// Application Constants
TEMPLATES_DIR = 'js/app/templates'