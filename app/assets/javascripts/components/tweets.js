//= require react
//= require components/tweet
//= require stores/tweet-store

var Tweets = React.createClass({displayName: "Tweets",
  // 1st: initialize the tweets array----------------------------------
  getInitialState: function() {
    return {
      // only the TweetStore had knowledge of the tweets array
      tweets: TweetStore.tweets
    };
  },

  // 2nd: set a property of state with a named tweets------------------

  // Using a TweetStore object to hold the tweets
  // When there is an event change, call the the TweetStore.recent method, which makes the  Ajax request
  componentDidMount: function() {
    TweetStore.onChangeEvent(function( _, response ) {
      this.setState({
        tweets: TweetStore.tweets
      })
    }.bind(this))
    TweetStore.recent()
  },

  // call server and update the state
  // componentDidMount is a built-in React method

  // componentDidMount: function() {
  //   $.ajax({
  //     url: '/tweets/recent',
  //     type: 'GET'
  //   }).done(function(serverResponse) {
  // // setting a State name tweets. setState is a built-in React method
  //     this.setState({
  //       tweets: serverResponse
  //     })
  //   }.bind(this))
  // },

  // 3rd: accept the ajax response and convert to proper format for rendering
  renderTweets: function() {
    // var data = [{id: 1,
    //             avatar_url: "http://robohash.org/abc",
    //             content: "abc",
    //             created_at: "2014-07-25T23:04:13Z",
    //             handle: "eee",
    //             hashtag_names: ["deleniti"],
    //             updated_at: "2014-07-25T23:04:13Z",
    //             username: "abc"}]

    // the var data is hard coded
    // var tweets = data.map(function(tweet){

    var tweets = this.state.tweets.map(function(tweet){
      // the capital Tweet is the component file for tweet.jsx, which renders just one tweet
      return(React.createElement(Tweet, {key: tweet.id, tweet: tweet}));
    })
    return tweets;
  },

  // 4th: render to the <Tweets /> in twitter.jsx

  render: function() {
    return (
      React.createElement("section", {id: "tweets-container"}, 
        React.createElement("h3", null, "Tweets"), 
        React.createElement("ul", null, 
          this.renderTweets()
        )
      )
    )
  }

})
