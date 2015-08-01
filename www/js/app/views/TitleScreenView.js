NS.define('TitleScreenView', Prosimity.BaseView.extend({

    id: 'title-screen',

    events: {
        '.right-off-canvas-toggle': 'onRightMenuClick'
    },



    initialize: function(messages) {

        // This view contains sub-views. We set them up here.
        var messages_view = new MessagesView([]);
        $('.right-off-canvas-menu').html(messages_view.$el);

        this.render();
    },

    render: function() {

        //this.$el.html(this._template());
    },

    onRightMenuClick: function(event) {

        var element = $(event.currentTarget);

        if(element.attr('aria-expanded') == 'false') {

        } else {

        }
    }
}));