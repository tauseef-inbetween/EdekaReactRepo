function loadMenuContent (screenName) {
  switch (screenName) {
    case 'Content':
      var $moduleContainer = $('#Content').get(0);
      React.render(<ProductWrapper />, $moduleContainer);
      break;
    default:
      $('#Content').html('Nothing to display');
  }

}
