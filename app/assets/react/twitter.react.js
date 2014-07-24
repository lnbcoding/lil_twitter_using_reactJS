/** @jsx React.DOM */
//= require header.react
//= require tweet-box.react
//= require trends.react
//= require tweets.react
var Twitter = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <section className="container">
          <TweetBox />
          <Trends />
          <Tweets />
        </section>
      </div>
    )
  }
})
