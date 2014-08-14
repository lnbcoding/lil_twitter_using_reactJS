/** @jsx React.DOM */
//= require stores/tweet-store
//= require tweet.react
var Tweets = React.createClass({displayName: 'Tweets',
  render: function() {
    var tweets = [];
    var data = [{avatar_url: "http://robohash.org/abc",
                content: "abc",
                created_at: "2014-07-25T23:04:13Z",
                handle: "eee",
                hashtag_names: ["deleniti"],
                updated_at: "2014-07-25T23:04:13Z",
                username: "abc"}]
    data.forEach(function(tweet){
      tweets.push(Tweet( {tweet:tweet}))
    })
    return (
      React.DOM.section( {id:"tweets-container"}, 
        React.DOM.h3(null, "Tweets"),
        React.DOM.ul(null, 
          tweets
        )
      )
    )
  }
})
