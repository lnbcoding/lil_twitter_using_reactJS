/** @jsx React.DOM */
//= require stores/tweet-store
//= require tweet.react
var Tweets = React.createClass({
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
      tweets.push(<Tweet tweet={tweet}/>)
    })
    return (
      <section id="tweets-container">
        <h3>Tweets</h3>
        <ul>
          {tweets}
        </ul>
      </section>
    )
  }
})
