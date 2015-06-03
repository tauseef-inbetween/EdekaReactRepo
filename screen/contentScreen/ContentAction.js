var ContentStore = require('./ContentStore');
var ContentUtils = require('./utils/ContentUtils');
var alertify = require('../../libraries/js/alertify/alertify');
var $ = require('jquery');
require('jquery-ui');
require('../../libraries/js/jquery/jquery.layout.js');

var Promise = require('promise');


var EventBus = require('../../libraries/js/flux/EventDispatcher.js');
var ContentAction = (function () {

    var setDefaultValueForCarousel = function () {
        ContentStore.setDefaultValueForCarousel();
    };

    var showAlertifySuccessMessage = function (msg) {
        if(msg) {
            alertify.success(msg);
        }
    };

    var showAlerifyFailureMessage = function (error) {
        if(!error) {
            error = "Uncaught Exception";
        }
        alertify.error(error);
    };

    var showPromiseFailureInfo = function () {
        alertify.error("Promise failed");
    };

    return {
        deleteProductButtonClicked: function (sProductId) {
            alertify.confirm("Do you really want to delete this product ?", function (eventDelete) {
                if (eventDelete) {
                    new Promise(function (resolve, reject) {
                        try {
                            ContentStore.deleteProductById(sProductId);
                            resolve("Product successfully deleted");
                        } catch(error) {
                            reject(error);
                        }
                    }).then(showAlertifySuccessMessage, showAlerifyFailureMessage)/*.catch(showPromiseFailureInfo)*/;
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

            new Promise(function (resolve, reject) {
                try {
                    ContentStore.setMainControllerView();
                    resolve();
                } catch (err){
                    reject(err);
                }
            }).then(showAlertifySuccessMessage, showAlerifyFailureMessage)/*.catch(showPromiseFailureInfo)*/;
        },

        changeSelectedProductProperty: function (property, value) {
            setDefaultValueForCarousel();
            ContentStore.setSelectedProductValue(property, value);
        },

        saveProductInfo: function () {
            setDefaultValueForCarousel();
            new Promise(function (resolve, reject) {
                try {
                    ContentStore.saveSelectedProductInfo();
                    resolve("Content successfully updated");
                } catch (error) {
                    reject(error);
                }
            }).then(showAlertifySuccessMessage, showAlerifyFailureMessage)
              /*.catch(showPromiseFailureInfo)*/;
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
            ContentStore.changeCarouselPosition(newLeftPosition, previousLeftPosition);
        },

        carouselPreviousPositionChanges: function  (newPreviousPosition) {
            ContentStore.changeCarouselPreviousLeftPosition(newPreviousPosition);
        },

        setSelectedNote: function (index) {
            ContentStore.changeSelectedNoteIndex(index);
        },

        setAllProduct: function (aProducts) {
            ContentStore.setProducts(JSON.parse(aProducts));
            ContentAction.backToViewMode();
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

            //If layout is not created then $.fn.then returns true or false
            if(typeof PIMCenterLayout != "boolean") {
                if(type == 'Semi-Structured' || type == 'Asset' || type == 'Impulse') {
                    PIMCenterLayout.hide('east');
                } else {
                    PIMCenterLayout.show('east');
                }
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