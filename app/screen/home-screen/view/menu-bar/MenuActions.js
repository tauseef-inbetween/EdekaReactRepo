var MenuStore = require('./MenuStore');
var ContentStore = require('../../contentScreen/ContentStore');

var MenuAction = (function () {
    return {
        menuItemClicked: function (btnLabel) {
            MenuStore.setMenuItemActive(btnLabel);
        },

        createButtonClicked: function (btnLabel) {
            switch (btnLabel) {
                case 'Content':
                    ContentStore.createProduct();
                    break;
                default :
                    console.log("You can create " + btnLabel);
            }
        }
    }
})();

module.exports = MenuAction;
