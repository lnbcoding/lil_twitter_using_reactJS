/** @jsx React.DOM */
//= require header.react
//= require tweet-box.react
//= require trends.react
//= require tweets.react
var Twitter = React.createClass({displayName: 'Twitter',
  render: function() {
    return (
      React.DOM.div(null, 
        Header(null ),
        React.DOM.section( {className:"container"}, 
          TweetBox(null ),
          Trends(null ),
          Tweets(null )
        )
      )
    )
  }
})
