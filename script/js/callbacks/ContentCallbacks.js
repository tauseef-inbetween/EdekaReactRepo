var getAllProductsCallBack = function (aProducts) {
    ContentListStore.setContentViewStyle('thumbnail');
    ContentListStore.setProducts(aProducts);
    backToViewMode();
};