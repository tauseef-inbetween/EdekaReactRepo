var getAllProductsCallBack = function (aProducts) {
    ContentListStore.setData(aProducts);
    ContentListStore.setContentViewStyle('thumbnail');
    backToViewMode();
};