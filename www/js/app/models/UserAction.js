/**
 * UserAction model.
 *
 * @author Chris Santos
 */
NS.define('UserAction', Prosimity.BaseModel.extend({

    initialize: function () {

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