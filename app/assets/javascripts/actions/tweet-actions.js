//= require dispatcher
var TweetActions = (function() {
  var actions = {};
  ['tweet', 'recent', 'popular', 'search'].forEach(function(action) {
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
