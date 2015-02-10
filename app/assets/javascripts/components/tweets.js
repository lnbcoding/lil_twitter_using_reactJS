//= require react

//= require components/tweet
var Tweets = React.createClass({displayName: "Tweets",
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
      tweets.push(React.createElement(Tweet, {tweet: tweet}))
    })
    return (
      React.createElement("section", {id: "tweets-container"}, 
        React.createElement("h3", null, "Tweets"), 
        React.createElement("ul", null, 
          tweets
        )
      )
    )
  }
})
