NS.define('TitleScreenView', Prosimity.BaseView.extend({

    id: 'title-screen',

    initialize: function() {

        this.setTemplate(TEMPLATES_DIR + '/title_screen.html')
        this.render();
    },

    render: function() {

        console.log('rendering Title Screen view');
        this.$el.html(this._template());
    }
}));