var loadDataFromNetwork = function (moduleName) {
    switch(moduleName) {
        case 'Content':
            $http('tacks/MockDataForProducts.json')
                .get()
                .then(getAllProductsCallBack)
                .catch(callback.error);
            break;
        default:
            console.log("No data to load");
    }
};