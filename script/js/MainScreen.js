$(document).ready(function(){
  loadMenuItems();
});

function loadMenuItems(){
  var $menuContainer = $('#MenuBar').get(0);
  React.render(<Menu />, $menuContainer);
}