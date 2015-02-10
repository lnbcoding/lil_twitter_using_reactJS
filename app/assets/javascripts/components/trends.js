//= require react
//= require components/hashtag
var Trends = React.createClass({displayName: "Trends",
  render: function() {
    var trends = [];
    var data = ["sweet"]
    data.forEach(function(tag) {
      trends.push(React.createElement(Hashtag, {tag: tag}))
    })
    return (
      React.createElement("section", {id: "trends-container"}, 
        React.createElement("h3", null, "Trends"), 
        React.createElement("a", {href: "#all"}, "All"), 
        React.createElement("ul", null, 
          trends
        )
      )
    )
  }
})
