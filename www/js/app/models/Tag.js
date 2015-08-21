/**
 * Tag model.
 *
 * @author Chris Santos
 */
NS.define('Tag', Prosimity.BaseModel.extend({

    go: function() {
        alert('go');
    }

}));

/**
 * Searches available Tags in the system.
 *
 * @param {String} query
 * @param {Number} offset
 * @param {Number} limit
 * @param {Function} success
 * @param {Function} error
 */
Tag.search = function(query, offset, limit, success, error) {

    var url = '/service/searchComplementsService';

    var _success = function(response) {

        var collection = new TagCollection();

        response['complements_list'].forEach(function(obj) {
            var model = new Tag({name: obj['complement_name']});
            collection.push(model);
        });

        success(collection);
    };

    this.post(url, {query: query, start: offset, count: limit}, _success, error);
};

/**
 * Add a tag to a user account.
 *
 * @param {Array} tags An array of Tag models.
 * @param {Function} success
 * @param {Function} error
 */
Tag.add = function(tags, success, error) {

    var url = '/service/addComplementsService';
    var values = [];

    tags.forEach(function(tag) {
        values.push({complementName: tag.get('name')})
    });

    var payload = {
        'complements': {
            _total: tags.length,
            values: values
        }
    };

    this.post(url, payload, success, error);
};