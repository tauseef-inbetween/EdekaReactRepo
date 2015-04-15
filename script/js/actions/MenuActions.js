var menuButtonClicked = function(btnLabel) {

  MenuDispatcher.dispatch({
    menuItemName: btnLabel
  });

};

var createButtonClicked = function (btnLabel) {
  switch (btnLabel) {
    case 'Content':
      ContentListStore.createProduct();
      break;
    default :
      console.log("You can create " + btnLabel);
  }
};