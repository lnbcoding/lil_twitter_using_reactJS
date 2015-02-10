//= require react
var Tweet = React.createClass({
  render: function() {
    var tweet = this.props.tweet;
    return (
      <li className="tweet">
        <img className="avatar" src={tweet.avatar_url} alt="" />
        <div className="tweet-content">
          <p>
            <span className="full-name">{tweet.username}</span>
            <span className="username">{tweet.handle}</span>
            <span className="timestamp">- {tweet.created_at}</span>
          </p>
          <p>{tweet.content}</p>
        </div>
      </li>
    )
  }
})
