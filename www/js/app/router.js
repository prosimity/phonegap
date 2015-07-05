NS.define('Router', Backbone.Router.extend({

    routes: {
        'stuff': 'stuff',
        'maincontroller/:action(/:params)': 'main'
    },

    initialize: function() {

        this.main_controller = new MainController();
    },

    main: function(action, param) {

        console.log(action, param);

        if(!this.main_controller.action) {
            throw new Prosimity.Exceptions.RouteException('There is no action "' + action + '" on controller MainController.');
        }
    }

}));