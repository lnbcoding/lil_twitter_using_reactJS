//= require dispatcher
var TweetStore = (function() {
  var _tweetCollection = [],
      _hashtagCollection = [];
  var _tweet = function(data) {
    if(data.hashtags) {
      data.hashtags = data.hashtags.split(",")
    }
    $.ajax({
      url: '/tweets',
      type: 'POST',
      data: {tweet: data}
    })
    .done(function(data) {
      _tweetCollection.unshift(data);
      $(TweetStore).trigger('change');
    }.bind(this))
    .fail(function() {
      $(this).trigger('error');
    })
  }
  _refreshTweets = function(data) {
    _tweetCollection = data;
    $(this).trigger('change');
  }
  _refreshTags = function(data) {
    _hashtagCollection = data;
    $(this).trigger('hashtag-change');
  }
  // register callback with dispatcher
  var _dispatcherCallback = function(action) {
    var type = action.type;
    var content = action.content;
    switch(type) {
      case 'tweet':
        _tweet(content);
        break;
      default:
        return true;
    }
  }
  Dispatcher.register(_dispatcherCallback);

  return {
    tweets: function() {
      return _tweetCollection;
    },

    popularHastags: function() {
      return _hashtagCollection;
    },

    recent: function() {
      $.ajax({
        url: '/tweets/recent',
        type: 'GET'
      })
      .done(_refreshTweets.bind(this))
      .fail(function() {
        $(this).trigger('error');
      })
    },

    hashtags: function() {
      $.ajax({
        url: '/hashtags/popular',
        type: 'GET'
      })
      .done(_refreshTags.bind(this))
      .fail(function() {
        $(this).trigger('error');
      })
    },

    search: function(hashtag) {
      $.ajax({
        url: 'tweets/search/'+hashtag,
        type: 'GET'
      })
      .done(_refreshTweets.bind(this))
      .fail(function() {
        $(this).trigger('error');
      })
    }
  }
}())
