var HashtagStore = (function(){
  var _hashtagCollection = [];
  _refreshTags = function(data) {
    _hashtagCollection = data;
    $(this).trigger('change');
  }
  return {
    hashtags: function() {
      return _hashtagCollection;
    },

    popular: function() {
      $.ajax({
        url: '/hashtags/popular',
        type: 'GET'
      })
      .done(_refreshTags.bind(this))
      .fail(function() {
        $(this).trigger('error');
      })
    },

  }
}())
