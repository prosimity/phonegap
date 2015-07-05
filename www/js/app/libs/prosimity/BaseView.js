/**
 * BaseView
 *
 * @namespace Prosimity
 * @class BaseView
 * @author Chris Santos
 */
NS.define('Prosimity.BaseView', Backbone.View.extend({

    initialize: function() {
        /**
         * Compiled template.
         *
         * @type {object}
         */
        _template: null
    },

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

    hide: function() {

        this.$el.hide();
    },

    show: function() {

        this.$el.show();
    }
}));