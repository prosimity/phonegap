NS.define('ProfileView', Prosimity.BaseView.extend({

    id: 'profile',
    template_selector: '#profile-template',
    events: {
        'keydown #tag-query': 'onTagQueryChange',
        'click #display_title': 'onDisplayFullNameSwitch'
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

        if(this.$el.html() == '') {
            this.$el.html(this.template({
                tags: this.tags.toJSON(),
                tag_query: this.tag_query,
                display_title: User.current().get('summary_visibility')
            }));

        } else {
            var HTML = this.template({
                tags: this.tags.toJSON(),
                tag_query: this.tag_query,
                display_title: User.current().get('summary_visibility')
            });

            var element = document.createElement('div');
            element.innerHTML = HTML;
            console.log(element.childNodes);
            //element = element.childNodes;

            var new_vnode = new vdomVirtualize(element);
            console.log(new_vnode);

            var existing_vnode = new vdomVirtualize(this.$el[0]);
            console.log(existing_vnode);

            var patches = virtualDom.diff(existing_vnode, new_vnode);
            console.log(patches);

            console.log('patching to', this.$el[0]);
            virtualDom.patch(this.$el[0], patches);
        }
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
    },

    onDisplayFullNameSwitch: function(event) {

        var $el = $(event.currentTarget);
        console.log($el);
        console.log($el.is(':checked'));

        if($el.is(':checked')) {
            User.current().set('summary_visibility', true);

        } else {
            User.current().set('summary_visibility', false);
        }
    }
}));