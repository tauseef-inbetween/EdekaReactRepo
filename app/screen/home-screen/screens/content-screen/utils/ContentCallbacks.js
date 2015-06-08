var ContentStore = require('../ContentStore');
var ContentAction = require('../ContentAction');
var ContentCallbacks = (function () {
    return {
        getAllProductsCallBack: function (aProducts) {
            ContentAction.setAllProduct(aProducts);
        }
    }
})();

module.exports = ContentCallbacks;