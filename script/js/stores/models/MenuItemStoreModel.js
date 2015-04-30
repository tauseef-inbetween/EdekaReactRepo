var MenuItemStoreModel = (function () {
    var MenuItemsList = [
        {title: "Calender", iconClass: "glyphicon glyphicon-calendar", isActive: true, canCreate: false},
        {title: "Campaign", iconClass: "glyphicon glyphicon-pencil", isActive: false, canCreate: true},
        {title: "Template", iconClass: "glyphicon glyphicon-folder-close", isActive: false, canCreate: true},
        {title: "Promotion", iconClass: "glyphicon glyphicon-pencil", isActive: false, canCreate: true},
        {title: "Assortment", iconClass: "glyphicon glyphicon-tasks", isActive: false, canCreate: true},
        {title: "Content", iconClass: "fa fa-cubes", isActive: false, canCreate: true},
        {title: "Target", iconClass: "glyphicon glyphicon-screenshot", isActive: false, canCreate: true},
        {title: "Report", iconClass: "glyphicon glyphicon-list-alt", isActive: false, canCreate: false}
    ];

    return {
        getMenuItemList: function () {
            return MenuItemsList;
        },

        setMenuItemList: function (menuItemList_p) {
            MenuItemsList = menuItemList_p;
        }
    };
})();
