var ContentCallbacks = require('../../contentScreen/utils/ContentCallbacks');
var $http = require('../../../libraries/js/promise/promise.js').$http;
var callback = require('../../../libraries/js/promise/promise.js').callback;

var ModuleDataLoader = (function () {
    return {
        loadDataFromNetwork: function (moduleName) {
            switch(moduleName) {
                case 'Content':
                    $http('http://localhost:63342/EdekaReactRepo/tacks/MockDataForProducts.json')
                        .get()
                        .then(ContentCallbacks.getAllProductsCallBack, callback.error)
                        .catch(callback.error);
                    break;
                default:
                    console.log("No data to load");
            }
        }
    }
})();

module.exports = ModuleDataLoader;
