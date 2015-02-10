//= require react

//= require components/tweet
var Tweets = React.createClass({
  render: function() {
    return (
      <section id="tweets-container">
        <h3>Tweets</h3>
        <ul>
          {this.renderTweets()}
        </ul>
      </section>
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
      return(<Tweet key={tweet.id} tweet={tweet}/>);
    })
    return tweets;
  }
})
