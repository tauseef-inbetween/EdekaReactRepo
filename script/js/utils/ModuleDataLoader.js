var loadDataFromNetwork = function (moduleName) {
    switch(moduleName) {
        case 'Content':
            $http('tacks/MockDataForProducts.json')
                .get()
                .then(getAllProductsCallBack)
                .catch(callback.error);
            //forwardRequest('tacks/MockDataForProducts.json', true, null, null, 'GET', getAllProductsCallBack);
            break;
        default:
            console.log("No data to load");
    }
};