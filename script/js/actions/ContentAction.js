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
    ContentListStore.setSelectedProduct(ContentListStore.getProductById(productId));
    ContentListStore.setContentViewMode('editMode');
};

var backToViewMode = function () {
    ContentListStore.setContentViewMode('viewMode');
};

var changeSelectedProduct = function (property, value) {
    ContentListStore.setSelectedProductValue(property, value);
};

var saveProductInfo = function () {
    ContentListStore.saveSelectedProductInfo();
    alertify.success("Content successfully updated");
};

var initialiseLayouts = function () {
    $('#northDOM').layout({
        applyDefaultStyles: true,
        panes: {
            spacing_open: 6
        },
        east: {
            size: 700,
            resizable: false
        },
        east__paneSelector: "#basicProductInfoContainer",
        center__paneSelector: "#centerOwlContainer"
    });

    $('#centerDOMMainContainer').layout({
        applyDefaultStyles: true,
        east__paneSelector: "#eastDOM",
        center_DOM: "#centerDOM",
        north__paneSelector: "#northDOM",
        panes: {
            spacing_open: 6
        },
        east: {
            size: 300
        },
        north: {
            size: 200
        }
    });

    $('#ProductEditInfoScreen').layout({
        applyDefaultStyles: true,
        west__paneSelector: "#westDOM",
        center__paneSelector: "#centerDOMMainContainer",
        panes: {
            spacing_open: 6
        },
        west: {
            size: 300
        }
    });
};
