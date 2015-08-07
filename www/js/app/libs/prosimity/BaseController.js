/**
 * BaseController
 *
 * @namespace Prosimity
 * @class BaseController
 * @author Chris Santos
 */
NS.define('Prosimity.BaseController', Prosimity.BaseFunction.extend({

    /**
     * This function is called by the router when executing a route.
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

        /**
         * TODO: For some reason, when adding pages to the DOM the left menu
         * scrolls down. This is here as a fix, but there should be a better
         * way to solve this issue.
         */
        $('.left-off-canvas-menu').scrollTop(0);
    },

    /**
     * Function called after executing the action passed in by the router.
     */
    afterAction: function() {

    },

    /**
     * Loads View if not already loaded, and then displays it on the main screen.
     * Hides all other views.
     *
     * @param {string} view_class_name
     */
    loadAndDisplayView: function(view_class_name) {

        this.view_manager.hideAll();

        if(this.view_manager.hasView(view_class_name)) {
            this.view_manager.getView(view_class_name).show()

        } else {
            var view = new window[view_class_name]();
            this.view_manager.addView(view, view_class_name, true);
        }
    }
}));