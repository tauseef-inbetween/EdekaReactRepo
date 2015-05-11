var deleteProductButtonClicked = function (sProductId) {
    alertify.confirm("Do you really want to delete this product ?", function (eventDelete) {
        if (eventDelete) {
            ContentStore.deleteProductById(sProductId);
            alertify.success("Product successfully deleted");
        }
    });
};

var handleViewButtonClicked = function (viewStyleButtonEvent) {
    viewStyleButtonEvent.currentTarget.id == 'pimViewThumbnail' ? ContentStore.setContentViewStyleWithTrigger('thumbnail') : ContentStore.setContentViewStyleWithTrigger('detailView');
};

var productThumbClicked = function (productId, index) {
    setDefaultValueForCarousel();
    ContentStore.setSelectedProduct(ContentStore.getProductById(productId));
    ContentStore.setSelectedIndex(index);
    ContentStore.setContentViewModeWithTrigger('editMode');
};

var backToViewMode = function () {

    destroyLayout('#northDOM');
    destroyLayout('#centerDOMMainContainer');
    destroyLayout('#ProductEditInfoScreen');
    var $container = $('#centerOwlContainer');
    if($container && $container.data('owlCarousel')) {
        $container.data('owlCarousel').destroy();
    }

    ContentStore.setCarouselPreviousLeftPosition(0);
    ContentStore.setCarouselLeftPosition(0);
    ContentStore.setSelectedProduct(null);
    ContentStore.setContentViewModeWithTrigger('viewMode');
};

var changeSelectedProductProperty = function (property, value) {
    setDefaultValueForCarousel();
    ContentStore.setSelectedProductValue(property, value);
};

var saveProductInfo = function () {
    setDefaultValueForCarousel();
    ContentStore.saveSelectedProductInfo();
    alertify.success("Content successfully updated");
};

var addNoteToSelectedContent = function (note) {
    setDefaultValueForCarousel();
    ContentStore.addProductNoteWithTrigger(note);
};

var deleteNoteFromSelectedProduct = function (note) {
    setDefaultValueForCarousel();
    ContentStore.deleteNoteById(note.id);
};

var changeNoteContent = function (groupItem, newNote) {
    setDefaultValueForCarousel();
    ContentStore.changeNoteDetails(groupItem, newNote);
};

var carouselPositionChanged = function (newLeftPosition, previousLeftPosition) {
    if(previousLeftPosition != undefined) {
        ContentStore.setCarouselPreviousLeftPosition(previousLeftPosition);
    }
    ContentStore.setCarouselLeftPositionWithTrigger(newLeftPosition);
};

var carouselPreviousPositionChanges = function  (newPreviousPosition) {
    ContentStore.setCarouselPreviousLeftPosition(newPreviousPosition);
};

var setDefaultValueForCarousel = function () {
    ContentStore.setCarouselPreviousLeftPosition(ContentStore.getData().getComponentProps().getCarouselPosition().leftPosition);
    ContentStore.setCarouselLeftPosition(ContentStore.getData().getComponentProps().getCarouselPosition().leftPosition);
};

var setSelectedNote = function (index) {
    ContentStore.setSelectedNoteIndexWithTrigger(index);
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
