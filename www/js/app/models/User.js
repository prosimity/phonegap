/**
 * Message model.
 *
 * @author Chris Santos
 */
NS.define('User', Prosimity.BaseModel.extend({

    initialize: function () {

        this.on('change:summary_visibility', this.onSummaryVisibilityChange);
    },

    onSummaryVisibilityChange: function (model) {

        User.updateSummaryVisibility(model.get('summary_visibility'));
    }
}));

/**
 * Get a hash of the user's settings.
 *
 * @param {Function} success
 * @param {Function} error
 */
User.getSettingsService = function(success, error) {

    var _success = function(response) {
        var tags = new TagCollection();

        if(response['complements'] != '') {
            var s = response['complements'].split("~");
            s.forEach(function (tag_str) {
                tags.push({name: tag_str});
            });

            response['complements'] = tags;

        } else {
            response['complements'] = null;
        }

        success(response);
    };

    this.post('/service/getsettingsService', {}, _success, error);
};

User.updateSummaryVisibility = function(visible, success, error) {

    var payload = {summary_visibility: visible, complements_visibility: false};

    this.post('/service/updatesummaryVisibility', payload, success, error);
}

User.current = function() {

    return this.user;
};

User.getUser = function(success, error) {

    var self = this;
    var _success = function(response) {
        self.user = new User(response);
    };

    this.get('/service/v2/getdetailprofile', {}, _success, error);
};
