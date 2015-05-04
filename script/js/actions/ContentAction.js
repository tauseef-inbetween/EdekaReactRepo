var deleteProductButtonClicked = function (sProductId) {
    alertify.confirm("Do you really want to delete this product ?", function (eventDelete) {
        if (eventDelete) {
            ContentListStore.deleteProductById(sProductId);
            alertify.success("Product successfully deleted");
        }
    });
};

var handleViewButtonClicked = function (viewStyleButtonEvent) {
    viewStyleButtonEvent.currentTarget.id == 'pimViewThumbnail' ? ContentListStore.setContentViewStyleWithTrigger('thumbnail') : ContentListStore.setContentViewStyleWithTrigger('detailView');
};

var productThumbClicked = function (productId, index) {
    ContentListStore.setSelectedProduct(ContentListStore.getProductById(productId));
    ContentListStore.setSelectedIndex(index);
    ContentListStore.setContentViewModeWithTrigger('editMode');
};

var backToViewMode = function () {

    destroyLayout('#northDOM');
    destroyLayout('#centerDOMMainContainer');
    destroyLayout('#ProductEditInfoScreen');
    var $container = $('#centerOwlContainer');
    if($container && $container.data('owlCarousel')) {
        $container.data('owlCarousel').destroy();
    }
    ContentListStore.setSelectedProduct(null);
    ContentListStore.setContentViewModeWithTrigger('viewMode');
};

var changeSelectedProductProperty = function (property, value) {
    ContentListStore.setSelectedProductValue(property, value);
};

var saveProductInfo = function () {
    ContentListStore.saveSelectedProductInfo();
    alertify.success("Content successfully updated");
};

var addNoteToSelectedContent = function (note) {
    ContentListStore.addProductNoteWithTrigger(note);
};

var deleteNoteFromSelectedProduct = function (note) {
    ContentListStore.deleteNoteById(note.id);
};

var changeNoteContent = function (groupItem, newNote) {
    ContentListStore.changeNoteDetails(groupItem, newNote);
};

var initialiseLayouts = function (type) {
    $('#northDOM').layout({
        applyDefaultStyles: true,
        panes: {
            spacing_open: 6
        },
        east: {
            size: 350
            //resizable: false
        },
        east__paneSelector: "#basicProductInfoContainer",
        center__paneSelector: "#centerOwlContainer"
    });

    var PIMCenterLayout = $('#centerDOMMainContainer').layout({
        applyDefaultStyles: true,
        east__paneSelector: "#eastDOM",
        center_DOM: "#centerDOM",
        north__paneSelector: "#northDOM",
        panes: {
            spacing_open: 6
        },
        east: {
            size: 350
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

    if(type == 'Semi-Structured' || type == 'Asset' || type == 'Impulse') {
        PIMCenterLayout.hide('east');
    } else {
        PIMCenterLayout.show('east');
    }
};
