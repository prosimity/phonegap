/**
 * BaseController
 *
 * @namespace Prosimity
 * @class BaseController
 * @author Chris Santos
 */
NS.define('Prosimity.BaseController', Prosimity.BaseFunction.extend({

    /**
     *
     */
    callAction: function(action, param) {

        this.beforeAction(action, param);
        this[action](param);
        this.afterAction(action, param);
    },

    /**
     * Function called before executing the action passed in by the router.
     */
    beforeAction: function(action, param) {

        console.info('Router action: ' + action + ' param: ' + param);
    },

    /**
     * Function called after executing the action passed in by the router.
     */
    afterAction: function() {

    },

    /**
     *
     * @param view
     */
    render: function(view) {

        view.render();
        this.attachView(view);
    },

    attachView: function(view) {

        $('.app').append(view.$el)
    }
}));