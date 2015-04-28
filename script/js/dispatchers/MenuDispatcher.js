var MenuDispatcher = new Dispatcher();

MenuDispatcher.register(function (menuItemPayLoad) {

    var sTitle = menuItemPayLoad.menuItemName;
    MenuListStore.setMenuItemActive(sTitle);
    return true;
});