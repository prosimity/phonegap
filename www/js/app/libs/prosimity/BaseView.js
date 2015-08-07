/**
 * BaseView
 *
 * @namespace Prosimity
 * @class BaseView
 * @author Chris Santos
 */
NS.define('Prosimity.BaseView', Backbone.View.extend({

    /**
     * Compiled template.
     *
     * @type {object}
     */
    template: null,

    /**
     * Selector used when compiling the view's template.
     *
     * @type {string}
     */
    template_selector: null,

    /**
     * The application router instance. Used for loading other views and actions.
     *
     * @type {Router}
     */
    router: window.router,

    constructor: function() {

        if(this.template_selector) {
            this.setTemplate(this.template_selector);
        }

        Backbone.View.prototype.constructor.apply(this, arguments);
    },

    /*
    setTemplate: function(filename) {

        var self = this;

        return $.ajax({
            url: filename,
            async: false,
            success: function(HTML) {
                self._template = Handlebars.compile(HTML);
            },
            error: function() {
                throw 'There was an error loading template: ' + filename;
            }
        });
    },
    */

    /**
     * Compiles the template with Handlebars.
     *
     * @param selector
     */
    setTemplate: function(selector) {

        this.template = Handlebars.compile($(selector).html());
    },

    hide: function() {

        this.$el.hide();
    },

    show: function() {

        this.$el.show();
    }
}));