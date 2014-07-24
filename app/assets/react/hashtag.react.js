/** @jsx React.DOM */
//= require stores/tweet-store
var Hashtag = React.createClass({
  render: function() {
    return (
      <li>
        <a href={"#" + this.props.tag} className="hashtag" onClick={this.handleClick}>{this.props.tag}</a>
      </li>
    )
  },
  handleClick: function(e) {
    e.preventDefault();
    TweetStore.search(e.target.hash.replace("#", ""));
  }
})
