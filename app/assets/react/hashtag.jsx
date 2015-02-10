//= require react
var Hashtag = React.createClass({
  render: function() {
    return (
      <li>
        <a href={"#" + this.props.tag} className="hashtag">{this.props.tag}</a>
      </li>
    )
  }
})
