/** @jsx React.DOM */
//= require stores/tweet-store
//= require tweet.react
var Tweets = React.createClass({displayName: 'Tweets',
  getInitialState: function() {
    return {
      recent: TweetStore.tweets()
    }
  },
  componentDidMount: function() {
    $(TweetStore).on('change', function(e) {
      this.setState({
        recent: TweetStore.tweets()
      })
    }.bind(this))
    TweetStore.recent();
  },
  render: function() {
    var tweets = [];
    this.state.recent.forEach(function(tweet){
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
