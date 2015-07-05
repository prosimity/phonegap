NS.define('LoginView', Prosimity.BaseView.extend({

    id: 'login',
    events: {
        '#login-button': 'onLoginButton'
    },

    initialize: function() {

        this.setTemplate(TEMPLATES_DIR + '/login.html')
        this.render();
    },

    render: function() {

        console.log('rendering login view');
        this.$el.html(this._template());
    },

    onLoginButton: function(event) {

        // Ajax call to API to for authentication.
    }
}));