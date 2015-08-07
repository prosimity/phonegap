/**
 * Message model.
 *
 * @author Chris Santos
 */
NS.define('User', Prosimity.BaseModel.extend({

}));

User.createMock = function() {

    return new User({
        id: 1,
        first_name: 'Ricky',
        last_name: 'Pisano'
    });
};

User.fetchUsersWithChatMessages = function(options) {

    if(options.success) {
        var messages = [
            Message.createMock(),
            Message.createMock(),
            Message.createMock()
        ];
        options.success(messages);
    }
}