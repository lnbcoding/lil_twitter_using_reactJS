/** @jsx React.DOM */
//= require stores/tweet-store
var Hashtag = React.createClass({displayName: 'Hashtag',
  render: function() {
    return (
      React.DOM.li(null, 
        React.DOM.a( {href:"#" + this.props.tag, className:"hashtag", onClick:this.handleClick}, this.props.tag)
      )
    )
  },
  handleClick: function(e) {
    e.preventDefault();
    TweetStore.search(e.target.hash.replace("#", ""));
  }
})
