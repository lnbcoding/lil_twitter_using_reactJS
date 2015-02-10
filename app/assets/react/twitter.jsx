//= require react
//= require components/header
//= require components/tweet-box
//= require components/trends
//= require components/tweets

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
