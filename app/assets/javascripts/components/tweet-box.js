//= require react


var TweetBox = React.createClass({displayName: "TweetBox",
  render: function() {
    return (
      React.createElement("section", {id: "tweet-box"}, 
        React.createElement("p", {id: "tweet-box-title"}, "Compose New Tweet"), 
        React.createElement("form", {id: "tweet-form"}, 
          React.createElement("textarea", {ref: "content", id: "new-tweet", cols: "30", rows: "5", name: "tweet", placeholder: "Tweet Something"}), 
          React.createElement("input", {ref: "hashtags", placeholder: "Hashtags (comma separated)"}), 
          React.createElement("input", {ref: "handle", placeholder: "Your Twitter handle"}), 
          React.createElement("input", {ref: "username", placeholder: "Your Twitter username"}), 
          React.createElement("input", {ref: "avatar_url", placeholder: "Avatar URL"}), 
          React.createElement("input", {type: "submit", value: "Tweet"})
        )
      )
    )
  }
})

