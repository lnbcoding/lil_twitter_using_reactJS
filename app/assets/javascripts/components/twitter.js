//= require react
//= require components/header
//= require components/tweet-box
//= require components/trends
//= require components/tweets

var Twitter = React.createClass({displayName: "Twitter",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement(Header, null), 
        React.createElement("section", {className: "container"}, 
          React.createElement(TweetBox, null), 
          React.createElement(Trends, null), 
          React.createElement(Tweets, null)
        )
      )
    )
  }
})
