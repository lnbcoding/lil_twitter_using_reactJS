//= require react
var Header = React.createClass({displayName: "Header",
  render: function() {
    return (
      React.createElement("header", {id: "top-nav"}, 
        React.createElement("div", {id: "brand"}, React.createElement("a", {href: "/"}, "Lil Twitter API")), 
        React.createElement("form", {id: "search-form"}, 
          React.createElement("input", {id: "search", type: "text", name: "query"})
        ), 
        React.createElement("i", {className: "fa fa-search"})
      )
    )
  }
})
