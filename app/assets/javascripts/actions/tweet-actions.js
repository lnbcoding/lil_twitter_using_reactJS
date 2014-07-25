//= require dispatcher
var TweetActions = (function() {
  var actions = {};
  ['tweet'].forEach(function(action) {
    actions[action] = function(content) {
      return (
        Dispatcher.dispatch({
          type: action,
          content: content
        })
      )
    }
  })
  return actions;
}())
