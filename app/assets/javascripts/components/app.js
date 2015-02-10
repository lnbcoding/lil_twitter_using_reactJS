//= require react
//= require components/twitter
$(document).ready(function() {
  React.renderComponent(React.createElement(Twitter, null), $('.twitter-app')[0]);
})
