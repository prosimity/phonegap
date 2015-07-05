/**
 * ViewManager.
 *
 * @namespace Prosimity
 * @class ViewManager
 * @author Chris Santos
 */
NS.define('Prosimity.ViewManager', Prosimity.BaseFunction.extend({

    constructor: function(element) {

        this._element = element;
    },

    /**
     * Set the DOM element where the views will be managed.
     *
     * @param {object} element
     */
    setElement: function(element) {

        this._element = element;
    },

    /**
     * Adds a view to be managed.
     */
    addView: function(view, visible) {

        if($(this._element).find('#' + view.id).length == 0) {
            visible ? view.show() : view.hide();
            this._element.append(view.$el);
        }
    }
}));