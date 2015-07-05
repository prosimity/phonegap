NS.define('Router', Backbone.Router.extend({

    routes: {
        ':action(/:params)': 'main'
    },

    initialize: function() {

        this.main_controller = new MainController();
        // this.users_controller = new MainController();
    },

    main: function(action, param) {

        if(!this.main_controller[action]) {
            throw new Prosimity.Exceptions.RouteException('There is no action "' + action + '" on controller MainController.');
        }

        this.main_controller.callAction(action, param);
    },

    users: function(action, param) {

        if(!this.users_controller[action]) {
            throw new Prosimity.Exceptions.RouteException('There is no action "' + action + '" on controller UsersController.');
        }

        this.users_controller.callAction(action, param);
    }

}));