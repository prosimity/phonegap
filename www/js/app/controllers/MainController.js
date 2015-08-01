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

    title: function() {


        /*
        Message.fetchMock({
            success: function(messages) {

            }
        });
        */

        if(this.view_manager.hasView('title')) {
            var view = this.view_manager.getView('title');
            view.show();
            return;
        }

        var view = new TitleScreenView();
        this.view_manager.addView(view, 'title', true);
    },

    loginAction: function() {

        var view = new LoginView();
        this.view_manager.addView(view);

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