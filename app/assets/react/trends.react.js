/** @jsx React.DOM */
//= require hashtag.react
//= require stores/tweet-store
var Trends = React.createClass({
  getInitialState: function() {
    return {
      hashtags: TweetStore.popularHastags()
    }
  },
  componentWillMount: function() {
    $(TweetStore).on('hashtag-change', function() {
      this.setState({
        hashtags: TweetStore.popularHastags()
      })
    }.bind(this))
    TweetStore.hashtags();
  },

  render: function() {
    var trends = [];
    this.state.hashtags.forEach(function(tag) {
      trends.push(<Hashtag tag={tag} />)
    })
    return (
      <section id="trends-container">
        <h3>Trends</h3>
        <a href="#all" onClick={this.allTweets}>All</a>
        <ul>
          {trends}
        </ul>
      </section>
    )
  },

  allTweets: function(e) {
    e.preventDefault();
    TweetStore.recent();
  }
})
