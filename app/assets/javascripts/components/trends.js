//= require react
//= require components/hashtag
var Trends = React.createClass({displayName: "Trends",
  render: function() {
    return (
      React.createElement("section", {id: "trends-container"}, 
        React.createElement("h3", null, "Trends"), 
        React.createElement("a", {href: "#all"}, "All"), 
        React.createElement("ul", null, 
          this.renderTrends()
        )
      )
    )
  },
  renderTrends: function() {
    var data = ["sweet", "dirk man", "ignore me"]
    var trends = data.map(function(tag, i) {
      return(React.createElement(Hashtag, {key: i, tag: tag}))
    })
    return trends;
  }
})
