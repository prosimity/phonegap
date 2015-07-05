NS.define('Prosimity.BaseException', Prosimity.BaseFunction.extend({

    name: 'BaseException',

    constructor: function(message) {

        this.message = message;
        this.stack = (new Error()).stack;
    },

    toString: function() {

        return this.name + ' (' + this.message + ')';
    }
}));