//= require react

//= require components/tweet
var Tweets = React.createClass({displayName: "Tweets",
  render: function() {
    return (
      React.createElement("section", {id: "tweets-container"}, 
        React.createElement("h3", null, "Tweets"), 
        React.createElement("ul", null, 
          this.renderTweets()
        )
      )
    )
  },
  renderTweets: function() {
    var data = [{id: 1,
                avatar_url: "http://robohash.org/abc",
                content: "abc",
                created_at: "2014-07-25T23:04:13Z",
                handle: "eee",
                hashtag_names: ["deleniti"],
                updated_at: "2014-07-25T23:04:13Z",
                username: "abc"}]

    var tweets = data.map(function(tweet){
      return(React.createElement(Tweet, {key: tweet.id, tweet: tweet}));
    })
    return tweets;
  }
})
