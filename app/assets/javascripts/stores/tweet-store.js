var TweetStore = {

    recent: function() {
        $.ajax({
        url: '/tweets/recent',
        type: 'GET'
    }).done(function(serverResponse) {
    // setting a State name tweets. setState is a built-in React method
        this.triggerChange(serverResponse);
        }.bind(this))
    },

    onChangeEvent: function(callback) {
        $(this).on('change', callback)
    },

    triggerChange: function(response) {
        $(this).trigger('change', [response])
    }

}
