var ContentCallbacks = require('../../contentScreen/utils/ContentCallbacks');
var $http = require('../../../libraries/js/promise/promise.js').$http;
var callback = require('../../../libraries/js/promise/promise.js').callback;

var ModuleDataLoader = (function () {
    return {
        loadDataFromNetwork: function (moduleName) {
            switch(moduleName) {
                case 'Content':
                    $http('tacks/MockDataForProducts.json')
                        .get()
                        .then(ContentCallbacks.getAllProductsCallBack)
                        .catch(callback.error);
                    break;
                default:
                    console.log("No data to load");
            }
        }
    }
})();

module.exports = ModuleDataLoader;
