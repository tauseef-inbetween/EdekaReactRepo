MainContainerStore = {
  data: allScreens,

  getAllData: function () {
    return this.data;
  },

  loadScreen: function (screenName) {
    var screens = MainContainerStore.getAllData();
    for(var iScreenCount = 0; iScreenCount < screens.length; iScreenCount++) {
      if(screens[iScreenCount].title == screenName) {
        screens[iScreenCount].isSelected = true;
      } else {
        screens[iScreenCount].isSelected = false;
      }
    }
    MainContainerStore.trigger('change');
  }
};

MicroEvent.mixin( MainContainerStore );