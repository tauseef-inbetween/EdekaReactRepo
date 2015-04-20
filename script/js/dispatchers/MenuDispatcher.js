var MenuDispatcher = new Dispatcher();

MenuDispatcher.register(function (menuItemPayLoad) {

    var sTitle = menuItemPayLoad.menuItemName;
    MenuListStore.setMenuItemActive(sTitle);
    switch (menuItemPayLoad.menuItemName) {
        case "Calender":
            break;
        case "Campaign":
            break;
        case "Template":
            break;
        case "Promotion":
            break;
        case "Assortment":
            break;
        case "Content":
            break;
        case "Target":
            break;
        case "Report":
            break;
        default :
            console.log("Invalid Click");
    }
    return true;
});