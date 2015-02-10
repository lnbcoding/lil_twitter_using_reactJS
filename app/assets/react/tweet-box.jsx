//= require react
var TweetBox = React.createClass({
  render: function() {
    return (
      <section id="tweet-box">
        <p id="tweet-box-title">Compose New Tweet</p>
        <form id="tweet-form">
          <textarea ref="content" id="new-tweet" cols="30" rows="5" name="tweet" placeholder="Tweet Something"></textarea>
          <input ref="hashtags" placeholder="Hashtags (comma separated)"/>
          <input ref="handle" placeholder="Your Twitter handle"/>
          <input ref="username" placeholder="Your Twitter username"/>
          <input ref="avatar_url" placeholder="Avatar URL"/>
          <input type="submit" value="Tweet" />
        </form>
      </section>
    )
  }
})
