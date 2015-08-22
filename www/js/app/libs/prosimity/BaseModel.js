/**
 * BaseModel
 *
 * @namespace Prosimity
 * @class BaseModel
 * @author Chris Santos
 */
NS.define('Prosimity.BaseModel', Backbone.Model.extend({

    appendAccessToken: function(payload) {

        payload['access_token'] = null;
    }
}));

(function() {

    var _sendRequest = function(url, type, hash, success, error) {

        // TODO: throw error if no 'success' or 'error' functions are passed.

        var payload = hash;

        if(type != 'GET') {
            payload = JSON.stringify(hash);
        }

        $.ajax({
            url: ENV.SERVICE_URL + url,
            contentType: "application/json",
            data: payload,
            dataType: 'json',
            type: type,
            success: success,
            error: error
        });
    };

    Prosimity.BaseModel.appendAccessToken = function(payload) {

        payload['access_token'] = 'b6b9a090-43ec-4488-a792-ee19295fe94c';
        payload['user_id'] = 98;

        return payload;
    };

    Prosimity.BaseModel.get = function(url, hash, success, error) {

        this.appendAccessToken(hash);
        _sendRequest(url, 'GET', hash, success, error);
    };

    Prosimity.BaseModel.post = function(url, hash, success, error) {

        this.appendAccessToken(hash);
        _sendRequest(url, 'POST', hash, success, error);
    };

    /*
    Prosimity.BaseModel.puts = function(hash, success, error) {

        this.appendAccessToken(hash);
        _sendRequest(this.url + '/', 'PUTS', hash, success, error);
    };

    Prosimity.BaseModel.delete = function(hash, success, error) {

        this.appendAccessToken(hash);
        _sendRequest(this.url, 'DELETE', hash, success, error);
    };
    */
})();