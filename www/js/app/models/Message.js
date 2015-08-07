/**
 * Message model.
 *
 * @author Chris Santos
 */
NS.define('Message', Prosimity.BaseModel.extend({

}));

Message.createMock = function() {

    return new Message({
        body: 'This is a message body.',
        from_user: null,
        to_user: null,
        timestamp: ''
    });
};

/**
 * Makes a server request for all messages to the provided user
 * and all messages from the current user to the provided user.
 *
 * @param user
 */
Message.fetchByUserMock = function(user, options) {

    if(options.success) {
        var messages = [
            Message.createMock(),
            Message.createMock(),
            Message.createMock()
        ];
        options.success(messages);
    }
}