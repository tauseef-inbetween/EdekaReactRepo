menuItemClicked = function (btnLabel) {
    MenuStore.setMenuItemActive(btnLabel);
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