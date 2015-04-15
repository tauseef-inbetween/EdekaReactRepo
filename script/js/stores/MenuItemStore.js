var MenuListStore = {
  items: MenuItemsList,

  getAllMenus: function() {
    return this.items;
  },

  setMenuItemActive: function(sMenuTitle) {
    var items = MenuListStore.items;
    for(var menuItem in items) {
      if(items[menuItem].title == sMenuTitle) {
        items[menuItem].isActive = true;
      } else {
        items[menuItem].isActive = false;
      }
    }
    MenuListStore.trigger('change');
  }
};

MicroEvent.mixin( MenuListStore );
