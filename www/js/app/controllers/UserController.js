/**
 * UserController
 *
 * @class UserController
 * @author Chris Santos
 */
NS.define('UserController', Prosimity.BaseController.extend({

    constructor: function() {

        //var main_element = $('.app');
    },

    loginAction: function() {

        var view = new LoginView();
        this.view_manager.addView(view);

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
    }
}));