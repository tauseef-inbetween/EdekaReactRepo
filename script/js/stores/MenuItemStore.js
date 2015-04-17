MenuListStore = {
  data: MenuItemsList,

  getAllData: function() {
    return this.data;
  },

  setMenuItemActive: function(sMenuTitle) {
    var data = this.data;
    for(var menuItem in data) {
      if(data[menuItem].title == sMenuTitle) {
        data[menuItem].isActive = true;
      } else {
        data[menuItem].isActive = false;
      }
    }
    MainContainerStore.loadScreen(sMenuTitle);
    this.trigger('change');
  }
};

MicroEvent.mixin( MenuListStore );
