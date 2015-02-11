var TweetStore = {

    tweets: [],

    recent: function() {
        $.ajax({
        url: '/tweets/recent',
        type: 'GET'
        }).done(function(serverResponse) {
        // setting a State name tweets. setState is a built-in React method

        // calling the triggerChange method defined below
        this.tweets = serverResponse;
        this.triggerChange();
        }.bind(this))
    },

    tweet: function(data) {
        $.ajax({
        url: '/tweets',
        type: 'POST',
        data: { tweet: data }
        }).done(function(serverResponse) {
        // setting a State name tweets. setState is a built-in React method

        // calling the triggerChange method defined below
        // posting a new tweet adds the new tweet to the front of the tweets array (using unshift)
        this.tweets.unshift(serverResponse);
        this.triggerChange()
        }.bind(this))
    },

    onChangeEvent: function(callback) {
        $(this).on('change', callback)
    },

    triggerChange: function(response) {
        $(this).trigger('change', [response])
    }

}
