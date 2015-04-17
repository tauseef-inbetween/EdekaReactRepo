var deleteProductButtonClicked = function (sProductId) {
  alertify.confirm("Are you sure you want to delete this product?",function(eventDelete){
    if(eventDelete) {
      ContentListStore.deleteProductById(sProductId);
      alertify.success("Product successfully deleted");
    }
  });
};

var handleViewButtonClicked = function(viewStyleButtonEvent) {
  viewStyleButtonEvent.currentTarget.id == 'pimViewThumbnail' ? ContentListStore.setContentViewStyle('thumbnail') : ContentListStore.setContentViewStyle('detailView');
};