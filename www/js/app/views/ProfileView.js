NS.define('ProfileView', Prosimity.BaseView.extend({

    id: 'profile',
    template_selector: '#profile-template',
    events: {
        'keydown #tag-query': 'onTagQueryChange'
    },

    initialize: function() {

        /**
         * Timer for keyboard keydown events.
         *
         * @type {object}
         */
        this.tag_timeout = null;

        /**
         * TagCollection
         *
         * @type {TagCollection}
         */
        this.tags = new TagCollection();

        this.tag_query = null;

        this.render();
    },

    render: function() {

        this.$el.html(this.template({
            tags: this.tags.toJSON(),
            tag_query: this.tag_query
        }));
    },

    onTagQueryChange: function(event) {

        var self = this;

        if(this.tag_timeout) {
            clearTimeout(this.tag_timeout);
        }

        this.tag_timeout = setTimeout(function() {

            self.tag_query = self.$el.find('#tag-query').val();

            var success = function(tags) {
                self.tags = tags;
                self.render();
            };

            Tag.search(self.tag_query, 0, 5, success, function() {
                // TODO: Handle Error
            });

        }, 1000);
    }
}));