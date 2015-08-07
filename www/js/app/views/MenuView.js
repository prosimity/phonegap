NS.define('MenuView', Prosimity.BaseView.extend({

    el: '.left-off-canvas-menu',

    events: {
        'click #home': 'onHome',
        'click #profile': 'onProfile',
        'click #share': 'onShare',
        'click #settings': 'onSettings'
    },

    initialize: function() {

    },

    onHome: function(event) {

    },

    onProfile: function(event) {

        router.navigate('profile', {trigger: true});
    },

    onShare: function(event) {

    },

    onSettings: function(event) {

    }
}));