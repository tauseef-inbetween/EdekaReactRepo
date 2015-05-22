var MicroEvent = require('../../../libraries/js/flux/MicroEvent.js');
var MenuStoreModel = require('./MenuStoreModel');

var MenuStore = {
    data: MenuStoreModel.getMenuItemList(),

    getData: function () {
        return this.data;
    },

    setMenuItemActive: function (sMenuTitle) {
        var menus = this.data || [];
        for (var iMenuCount = 0; iMenuCount < menus.length; iMenuCount++) {
            menus[iMenuCount].isActive = (menus[iMenuCount].title == sMenuTitle);
        }

        var HomeScreenStore = require('../HomeScreenStore');
        HomeScreenStore.loadScreen(sMenuTitle);
        this.trigger('change');
    }
};

MicroEvent.mixin(MenuStore);
module.exports = MenuStore;