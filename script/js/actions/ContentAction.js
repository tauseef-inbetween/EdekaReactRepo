var deleteProductButtonClicked = function (sProductId) {
  ContentListStore.deleteProductById(sProductId);
};

var handleViewButtonClicked = function(viewStyleButtonEvent) {
  viewStyleButtonEvent.currentTarget.id == 'pimViewThumbnail' ? ContentListStore.setContentViewStyle('thumbnail') : ContentListStore.setContentViewStyle('detailView');
};