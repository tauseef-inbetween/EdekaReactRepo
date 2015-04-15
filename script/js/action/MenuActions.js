var menuButtonClicked = function(btnLabel) {
  MenuDispatcher.dispatch({
    menuItemName: btnLabel
  });
};