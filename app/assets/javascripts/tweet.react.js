/** @jsx React.DOM */
var Tweet = React.createClass({displayName: 'Tweet',
  render: function() {
    var tweet = this.props.tweet;
    return (
      React.DOM.li( {className:"tweet"}, 
        React.DOM.img( {className:"avatar", src:tweet.avatar_url, alt:""} ),
        React.DOM.div( {className:"tweet-content"}, 
          React.DOM.p(null, 
            React.DOM.span( {className:"full-name"}, tweet.username),
            React.DOM.span( {className:"username"}, tweet.handle),
            React.DOM.span( {className:"timestamp"}, "- ", tweet.created_at)
          ),
          React.DOM.p(null, tweet.content)
        )
      )
    )
  }
})
