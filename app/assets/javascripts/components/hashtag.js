//= require react
var Hashtag = React.createClass({displayName: "Hashtag",
  render: function() {
    return (
      React.createElement("li", null, 
        React.createElement("a", {href: "#" + this.props.tag, className: "hashtag"}, this.props.tag)
      )
    )
  }
})
