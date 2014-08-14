/** @jsx React.DOM */
//= require stores/tweet-store
//= require tweet.react
var Tweets = React.createClass({
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
