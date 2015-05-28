var ContentStore = require('./ContentStore');
var ContentUtils = require('./utils/ContentUtils');
var alertify = require('../../libraries/js/alertify/alertify');
var $ = require('jquery');
require('../../libraries/js/jquery/jquery.layout.js');

var Promise = require('promise');


var EventBus = require('../../libraries/js/flux/EventDispatcher.js');
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

        handleViewButtonClicked: function (custom_event, viewStyleButtonEvent) {
            viewStyleButtonEvent.currentTarget.id == 'pimViewThumbnail' ? ContentStore.changeContentViewStyle('thumbnail') : ContentStore.changeContentViewStyle('detailView');
        },

        productThumbClicked: function (productId, index) {
            setDefaultValueForCarousel();
            ContentStore.changeSelectedProductOnThumbClick(productId, index);
        },

        backToViewMode: function () {

            ContentUtils.destroyAllLayout();
            var $container = $('#centerOwlContainer');
            if($container && $container.data('owlCarousel')) {
                $container.data('owlCarousel').destroy();
            }

            var promise = new Promise(function (resolve, reject) {
                try {
                    ContentStore.setSelectedProduct(null);
                    ContentStore.setCarouselPosition(0,0);
                    ContentStore.setContentViewMode('viewMode');
                    resolve();
                } catch (err){
                    reject(err);
                }
            });

            promise.then(
                function () {
                    ContentStore.triggerChange();
                },
                function (msg) {
                    console.log(msg);
                }
            ).catch(function() { console.log('Promise was rejected');});
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
            ContentStore.changeProductNoteList(note);
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
            ContentStore.changeCarouselLeftPosition(newLeftPosition);
        },

        carouselPreviousPositionChanges: function  (newPreviousPosition) {
            ContentStore.setCarouselPreviousLeftPosition(newPreviousPosition);
        },

        setSelectedNote: function (index) {
            ContentStore.changeSelectedNoteIndex(index);
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

(function () {
    EventBus.addEventListener("view_change_event", ContentAction.handleViewButtonClicked);
    EventBus.addEventListener("save_product_event", ContentAction.saveProductInfo);
    EventBus.addEventListener("back_view_mode_event", ContentAction.backToViewMode);
})();

module.exports = ContentAction;