NS.define('Prosimity.Exceptions.RouteException', Prosimity.BaseFunction.extend({

    constructor: function(message) {

        Prosimity.Exceptions.RouteException.__super__.constructor.call(this, message);

        this.name = 'RouteException';
        this.message = message;
    },

    toString: function() {

        return 'RouteException';
    }
}));