/**
 * MainController
 *
 * @class MainController
 * @author Chris Santos
 */
NS.define('MainController', Prosimity.BaseController.extend({

    constructor: function() {

        var main_element = $('.app');
        this.view_manager = new Prosimity.ViewManager(main_element);
    },

    loadTitleScreenAction: function() {

        var view = new TitleScreenView();
        this.view_manager.addView(view);
    },

    loginAction: function() {

        var view = new LoginView();
        this.view_manager.addView(view);
    }
}));