var deleteProductButtonClicked = function (sProductId) {
    alertify.confirm("Do you really want to delete this product ?", function (eventDelete) {
        if (eventDelete) {
            ContentListStore.deleteProductById(sProductId);
            alertify.success("Product successfully deleted");
        }
    });
};

var handleViewButtonClicked = function (viewStyleButtonEvent) {
    viewStyleButtonEvent.currentTarget.id == 'pimViewThumbnail' ? ContentListStore.setContentViewStyle('thumbnail') : ContentListStore.setContentViewStyle('detailView');
};

var productThumbClicked = function (productId) {
    console.log("Product Id : " + productId);

};

function initialiseLayouts() {
    $('#northDOM').layout({
        applyDefaultStyles: true,
        panes: {
            spacing_open: 6
        },
        east: {
            size: 300,
            resizable: false
        },
        east__paneSelector: "#basicProductInfoContainer",
        center__paneSelector: "#centerOwlContainer"
    });


    $('#ProductEditInfoScreen').layout({
        applyDefaultStyles: true,
        west__paneSelector: "#westDOM",
        east__paneSelector: "#eastDOM",
        center__paneSelector: "#centerDOM",
        north__paneSelector: "#northDOM",
        panes: {
            spacing_open: 6
        },
        east: {
            size: 300
        },
        west: {
            size: 300
        },
        north: {
            size: 200
        }
    });
}
