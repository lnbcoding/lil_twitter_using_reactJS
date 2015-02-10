//= require react
var Tweet = React.createClass({displayName: "Tweet",
  render: function() {
    var tweet = this.props.tweet;
    return (
      React.createElement("li", {className: "tweet"}, 
        React.createElement("img", {className: "avatar", src: tweet.avatar_url, alt: ""}), 
        React.createElement("div", {className: "tweet-content"}, 
          React.createElement("p", null, 
            React.createElement("span", {className: "full-name"}, tweet.username), 
            React.createElement("span", {className: "username"}, tweet.handle), 
            React.createElement("span", {className: "timestamp"}, "- ", tweet.created_at)
          ), 
          React.createElement("p", null, tweet.content)
        )
      )
    )
  }
})
