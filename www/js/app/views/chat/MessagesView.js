/**
 * Displays a list of the user's current chat conversions.
 *
 * @author Chris Santos
 */
NS.define('ChatListView', Prosimity.BaseView.extend({

    id: 'chat-list-view',

    template_selector: '#chat-list-template',

    /**
     * Array of Message model objects.
     *
     * @type {array}
     */
    users: [],

    initialize: function(messages) {

        MessagesView.__super__.initialize.call(this);

        this.render();
    },

    render: function(messages) {

        this.$el.html(this.template(this));
    }

}));