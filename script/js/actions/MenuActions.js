var menuButtonClicked = function(btnLabel) {

  MenuDispatcher.dispatch({
    menuItemName: btnLabel
  });

};

var createButtonClicked = function (btnLabel) {
  console.log("You can create " + btnLabel);
};