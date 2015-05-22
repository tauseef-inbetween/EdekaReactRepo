var ContentStore = require('./ContentStore');
var ContentUtils = require('./utils/ContentUtils');

var ContentAction = (function () {
    var setDefaultValueForCarousel = function () {
        ContentStore.setCarouselPreviousLeftPosition(ContentStore.getData().componentProps.getCarouselPosition().leftPosition);
        ContentStore.setCarouselLeftPosition(ContentStore.getData().componentProps.getCarouselPosition().leftPosition);
    };

    return {
        deleteProductButtonClicked: function (sProductId) {
            alertify.confirm("Do you really want to delete this product ?", function (eventDelete) {
                if (eventDelete) {
                    ContentStore.deleteProductById(sProductId);
                    alertify.success("Product successfully deleted");
                }
            });
        },

        handleViewButtonClicked: function (viewStyleButtonEvent) {
            viewStyleButtonEvent.currentTarget.id == 'pimViewThumbnail' ? ContentStore.setContentViewStyleWithTrigger('thumbnail') : ContentStore.setContentViewStyleWithTrigger('detailView');
        },

        productThumbClicked: function (productId, index) {
            setDefaultValueForCarousel();
            ContentStore.setSelectedProduct(ContentStore.getProductById(productId));
            ContentStore.setSelectedIndex(index);
            ContentStore.setContentViewModeWithTrigger('editMode');
        },

        backToViewMode: function () {

            ContentUtils.destroyLayout('#northDOM');
            ContentUtils.destroyLayout('#centerDOMMainContainer');
            ContentUtils.destroyLayout('#ProductEditInfoScreen');
            var $container = $('#centerOwlContainer');
            if($container && $container.data('owlCarousel')) {
                $container.data('owlCarousel').destroy();
            }

            ContentStore.setCarouselPreviousLeftPosition(0);
            ContentStore.setCarouselLeftPosition(0);
            ContentStore.setSelectedProduct(null);
            ContentStore.setContentViewModeWithTrigger('viewMode');
        },

        changeSelectedProductProperty: function (property, value) {
            setDefaultValueForCarousel();
            ContentStore.setSelectedProductValue(property, value);
        },

        saveProductInfo: function () {
            setDefaultValueForCarousel();
            ContentStore.saveSelectedProductInfo();
            alertify.success("Content successfully updated");
        },

        addNoteToSelectedContent: function (note) {
            setDefaultValueForCarousel();
            ContentStore.addProductNoteWithTrigger(note);
        },

        deleteNoteFromSelectedProduct: function (note) {
            setDefaultValueForCarousel();
            ContentStore.deleteNoteById(note.id);
        },

        changeNoteContent: function (groupItem, newNote) {
            setDefaultValueForCarousel();
            ContentStore.changeNoteDetails(groupItem, newNote);
        },

        carouselPositionChanged: function (newLeftPosition, previousLeftPosition) {
            if(previousLeftPosition != undefined) {
                ContentStore.setCarouselPreviousLeftPosition(previousLeftPosition);
            }
            ContentStore.setCarouselLeftPositionWithTrigger(newLeftPosition);
        },

        carouselPreviousPositionChanges: function  (newPreviousPosition) {
            ContentStore.setCarouselPreviousLeftPosition(newPreviousPosition);
        },

        setSelectedNote: function (index) {
            ContentStore.setSelectedNoteIndexWithTrigger(index);
        },

        initialiseLayouts: function (type) {
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

            PIMCenterLayout = $('#centerDOMMainContainer').layout({
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
        }
    }
})();

module.exports = ContentAction;