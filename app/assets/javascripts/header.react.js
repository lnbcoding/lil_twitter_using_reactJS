/** @jsx React.DOM */
var Header = React.createClass({displayName: 'Header',
  render: function() {
    return (
      React.DOM.header( {id:"top-nav"}, 
        React.DOM.div( {id:"brand"}, React.DOM.a( {href:"/"}, "Lil Twitter API")),
        React.DOM.form( {id:"search-form"}, 
          React.DOM.input( {id:"search", type:"text", name:"query"} )
        ),
        React.DOM.i( {className:"fa fa-search"})
      )
    )
  }
})
