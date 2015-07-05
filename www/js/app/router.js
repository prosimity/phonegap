NS.define('Router', Backbone.Router.extend({

    routes: {
        ':action(/:params)': 'main'
    },

    initialize: function() {

        this.main_controller = new MainController();
    },

    main: function(action, param) {

        console.info('Route action: ' + action + ' params: ' + param);

        if(!this.main_controller[action]) {
            throw new Prosimity.Exceptions.RouteException('There is no action "' + action + '" on controller MainController.');
        }

        this.main_controller[action](param);
    }

}));