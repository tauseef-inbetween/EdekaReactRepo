MenuListStore = {
    data: MenuItemsList,

    getAllData: function () {
        return this.data;
    },

    setMenuItemActive: function (sMenuTitle) {
        var menus = this.data || [];
        for (var iMenuCount = 0; iMenuCount < menus.length; iMenuCount++) {
            menus[iMenuCount].isActive = (menus[iMenuCount].title == sMenuTitle);
        }
        MainContainerStore.loadScreen(sMenuTitle);
        this.trigger('change');
    }
};

MicroEvent.mixin(MenuListStore);