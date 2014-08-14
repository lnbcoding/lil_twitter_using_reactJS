/** @jsx React.DOM */
//= require hashtag.react
//= require stores/hashtag-store
//= require stores/tweet-store
var Trends = React.createClass({displayName: 'Trends',
  render: function() {
    var trends = [];
    var data = ["sweet"]
    data.forEach(function(tag) {
      trends.push(Hashtag( {tag:tag} ))
    })
    return (
      React.DOM.section( {id:"trends-container"}, 
        React.DOM.h3(null, "Trends"),
        React.DOM.a( {href:"#all", onClick:this.allTweets}, "All"),
        React.DOM.ul(null, 
          trends
        )
      )
    )
  },

  allTweets: function(e) {
    e.preventDefault();
    TweetStore.recent();
  }
})
