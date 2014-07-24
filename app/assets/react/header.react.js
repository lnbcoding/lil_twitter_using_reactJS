/** @jsx React.DOM */
var Header = React.createClass({
  render: function() {
    return (
      <header id="top-nav">
        <div id="brand"><a href="/">Lil Twitter API</a></div>
        <form id="search-form">
          <input id="search" type="text" name="query" />
        </form>
        <i className="fa fa-search"></i>
      </header>
    )
  }
})
