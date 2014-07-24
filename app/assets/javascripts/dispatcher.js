var Dispatcher = (function() {
  var _callbacks = [];
  return {
    register: function(callback) {
      _callbacks.push(callback);
    },

    dispatch: function(action) {
      _callbacks.forEach(function(callback) {
        callback(action);
      })
    }
  }
}());
