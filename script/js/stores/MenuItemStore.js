var MenuListStore = {
  data: MenuItemsList,

  getAllData: function() {
    return this.data;
  },

  setMenuItemActive: function(sMenuTitle) {
    var data = MenuListStore.data;
    for(var menuItem in data) {
      if(data[menuItem].title == sMenuTitle) {
        data[menuItem].isActive = true;
      } else {
        data[menuItem].isActive = false;
      }
    }
    loadMenuContent(sMenuTitle);
    MenuListStore.trigger('change');
  }
};

MicroEvent.mixin( MenuListStore );
