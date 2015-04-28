var loadDataFromNetwork = function (moduleName) {
    switch(moduleName) {
        case 'Content':
            forwardRequest('tacks/MockDataForProducts.json', true, null, null, 'GET', getAllProductsCallBack);
            break;
        default:
            console.log("No data to load");
    }
};