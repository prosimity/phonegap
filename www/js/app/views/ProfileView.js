NS.define('ProfileView', Prosimity.BaseView.extend({

    id: 'profile',
    template_selector: '#profile-template',

    initialize: function() {

        this.render();
    },

    render: function() {

        this.$el.html(this.template());
    }
}));