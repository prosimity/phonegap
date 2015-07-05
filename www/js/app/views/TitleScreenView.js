NS.define('TitleScreenView', Prosimity.BaseView.extend({

    id: 'title-screen',

    initialize: function() {

        this.setTemplate(TEMPLATES_DIR + '/title_screen.html')
    },

    render: function() {

        console.log('rendering Title Screen view');
    }
}));