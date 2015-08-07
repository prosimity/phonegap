/**
 * MainController
 *
 * @class MainController
 * @author Chris Santos
 */
NS.define('MainController', Prosimity.BaseController.extend({

    menu_view: null,

    constructor: function() {

        var main_element = $('.main-section');
        this.view_manager = new Prosimity.ViewManager(main_element);

        // Setup MenuView and TODO: ChatView
        this.menu_view = new MenuView();
    },

    /**
     * Hide and show the menu.
     *
     * @param {boolean} visible
     */
    toggleMenu: function(visible) {

        $('.left-off-canvas-menu').foundation('offcanvas', visible ? 'show' : 'hide', 'move-right');
    },

    title: function() {

        alert('getting here');
    },

    /**
     * Profile View.
     */
    profile: function() {

        this.loadAndDisplayView('ProfileView')
        this.toggleMenu(false);
    },

    loginAction: function() {

        //var view = new LoginView();
        //this.view_manager.addView(view);

        /*
        var jso = new JSO({
            providerID: "linkedin",
            client_id: "8pfycdymm7yq",
            redirect_uri: "http://localhost",
            authorization: "https://www.linkedin.com/uas/oauth2/authorization",
            scopes: { request: ["r_basicprofile"]}
        });

        JSO.enablejQuery($);

        jso.ajax({
        dataType: 'json',
        success: function(data) {
            console.log("Response (google):");
            console.log(data);
            $(".loader-hideOnLoad").hide();
        }
        });
        */
    },

    messages: function() {

        console.log('called messages action');
    }
}));