var getAllProductsCallBack = function (aProducts) {
    ContentListStore.setContentViewStyle('thumbnail');
    ContentListStore.setProducts(JSON.parse(aProducts));
    backToViewMode();
};