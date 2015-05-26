var ContentStore = require('../ContentStore');
var ContentAction = require('../ContentAction');

var ContentCallbacks = (function () {
    return {
        getAllProductsCallBack: function (aProducts) {
            console.log(aProducts);
            ContentStore.setContentViewStyle('thumbnail');
            ContentStore.setProducts(JSON.parse(aProducts));
            ContentAction.backToViewMode();
        }
    }
})();

module.exports = ContentCallbacks;