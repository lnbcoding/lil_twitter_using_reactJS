//= require react
//= require components/twitter
$(document).ready(function() {
  React.renderComponent(<Twitter />, $('.twitter-app')[0]);
})
