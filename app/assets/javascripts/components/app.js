//= require react
//= require components/twitter
$(document).ready(function() {
  React.render(React.createElement(Twitter, null), $('.twitter-app')[0]);
})
