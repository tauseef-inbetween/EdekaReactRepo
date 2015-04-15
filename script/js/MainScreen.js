$(document).ready(function(){
  var $menuContainer = $('#MenuBar').get(0);
  React.render(<Menu />, $menuContainer);
});