var getAllProductsCallBack = function (aProducts) {
    ContentStore.setContentViewStyle('thumbnail');
    ContentStore.setProducts(JSON.parse(aProducts));
    backToViewMode();
};