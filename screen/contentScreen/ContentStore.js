var MicroEvent = require('../../libraries/js/flux/MicroEvent.js');
var ContentApplicationData = require('./ContentApplicationData');
var ContentComponentProperties = require('./ContentComponentProperties');
var ContentUtils = require('./utils/ContentUtils');
var _ = require('lodash');

var ContentStore = (function () {

    var data = {appData: ContentApplicationData, componentProps: ContentComponentProperties};

    var addDefaultNotes = function (classValue) {
        var groups = _.result(_.find(data.appData.getProductClasses(), 'label', classValue), 'groups');
        var defaultNotes = _.where(groups, {'defaultValue': true});
        var selectedProductNotes = data.componentProps.getSelectedProps().getSelectedProduct().notes;
        var notesToAdd = _.filter(defaultNotes, function (obj) {
            return !_.findWhere(selectedProductNotes, {'type': obj.label});
        });
        _.map(notesToAdd, function (note) {
            addProductNote(note);
        });
    };

    var addProductNote = function (note) {
        var newNote = ContentUtils.createDummyNote(note);
        data.componentProps.getSelectedProps().getSelectedProduct().notes.push(newNote);
    };

    var setSelectedProduct = function (oProduct) {
        data.componentProps.getSelectedProps().setSelectedProduct(_.clone(oProduct, true));
    };

    var setContentViewMode = function (sContentViewMode) {
        data.componentProps.setContentViewMode(sContentViewMode);
    };

    var setContentViewStyle = function (sViewStyle) {
        data.componentProps.setContentViewStyle(sViewStyle);
    };

    var getProductById = function (sProductId) {
        var products = data.appData.getAllProducts() || [];
        for (var iProductCount = 0; iProductCount < products.length; iProductCount++) {
            if (products[iProductCount].id === sProductId) {
                return products[iProductCount];
            }
        }
        return null;
    };

    var getSelectedProductNoteValuesById = function (groupId) {
        var notes = data.componentProps.getSelectedProps().getSelectedProduct().notes || [];
        return (_.result(_.find(notes, function (note) {
            return note.id == groupId;
        }), 'values'));
    };

    var setCarouselLeftPosition = function (leftPosition) {
        data.componentProps.getCarouselPosition().leftPosition = leftPosition;
    };

    var setCarouselPreviousLeftPosition = function (previousLeft) {
        if (previousLeft == undefined) {
            previousLeft = data.componentProps.getCarouselPosition().leftPosition;
        }
        data.componentProps.getCarouselPosition().previousLeftPosition = previousLeft;
    };

    var setSelectedIndex = function (index) {
        data.componentProps.getSelectedProps().setSelectedIndex(index);
    };

    var triggerChange = function () {
        ContentStore.trigger('change');
    };

    var setCarouselPosition = function (currLeft, previousLeft) {
        setCarouselLeftPosition(currLeft);
        setCarouselPreviousLeftPosition(previousLeft);
    };

    return {

        getData: function () {
            return data;
        },

        setProducts: function (products) {
            data.appData.setAllProducts(products);
            setContentViewStyle('thumbnail');
            triggerChange();
        },

        setSelectedProductValue: function (property, value) {
            if (property == 'class') {
                addDefaultNotes(value);
            }
            var selectedProduct = data.componentProps.getSelectedProps().getSelectedProduct();
            selectedProduct[property] = value;
            setSelectedProduct(selectedProduct);
            triggerChange();
        },

        changeContentViewMode: function (sContentViewMode) {
            setContentViewMode(sContentViewMode);
            triggerChange();
        },

        changeContentViewStyle: function (sViewStyle) {
            setContentViewStyle(sViewStyle);
            triggerChange();
        },

        saveSelectedProductInfo: function () {
            var selectedProduct = data.componentProps.getSelectedProps().getSelectedProduct();
            var product = getProductById(selectedProduct.id);
            _.assign(product, selectedProduct);
            triggerChange();
        },

        createProduct: function () {
            var dummyProduct = ContentUtils.createDummyProduct();
            data.appData.getAllProducts().push(dummyProduct);
            triggerChange();
        },

        deleteNoteById: function (sNoteId) {
            var notes = data.componentProps.getSelectedProps().getSelectedProduct().notes || [];
            for (var iNoteCount = 0; iNoteCount < notes.length; iNoteCount++) {
                if (notes[iNoteCount].id == sNoteId) {
                    notes.splice(iNoteCount, 1);
                    triggerChange();
                    return;
                }
            }
        },

        deleteProductById: function (sProductId) {
            var products = data.appData.getAllProducts() || [];
            for (var iProductCount = 0; iProductCount < products.length; iProductCount++) {
                if (products[iProductCount].id === sProductId) {
                    products.splice(iProductCount, 1);
                    triggerChange();
                    return;
                }
            }
        },

        changeNoteDetails: function (groupItem, newNote) {
            var values = getSelectedProductNoteValuesById(groupItem.id);
            var value = _.result(_.find(values, function (value) {
                return value.label == newNote.label;
            }), 'value');

            value = newNote.value;
            //_.assign(value,newNote.value);
            var selectedProduct = data.componentProps.getSelectedProps().getSelectedProduct();
            setSelectedProduct(selectedProduct);
            triggerChange();
        },

        changeProductNoteList: function (note) {
            addProductNote(note);
            triggerChange();
        },

        changeSelectedNoteIndex: function (index) {
            data.componentProps.getSelectedProps().setSelectedNoteIndex(index);
            triggerChange();
        },

        changeSelectedProductOnThumbClick: function (productId, index) {
            setSelectedProduct(getProductById(productId));
            setSelectedIndex(index);
            setContentViewMode('editMode');
            triggerChange();
        },

        changeCarouselPosition: function (leftPosition, prevLeftPosition) {
            if(leftPosition!= undefined && prevLeftPosition != undefined) {
                setCarouselPosition(leftPosition, prevLeftPosition);
            }
            else if(leftPosition != undefined) {
                setCarouselLeftPosition(leftPosition);
            } else {
                setCarouselPreviousLeftPosition(prevLeftPosition);
            }
            triggerChange();
        },

        changeCarouselLeftPosition: function (leftPosition) {
            setCarouselLeftPosition(leftPosition);
            triggerChange();
        },

        changeCarouselPreviousLeftPosition: function (prevLeft) {
            setCarouselPreviousLeftPosition(prevLeft);
            triggerChange();
        },

        setDefaultValueForCarousel: function () {
            setCarouselLeftPosition(data.componentProps.getCarouselPosition().leftPosition);
            setCarouselPreviousLeftPosition(data.componentProps.getCarouselPosition().leftPosition);
            triggerChange();
        },

        setMainControllerView: function () {
            setSelectedProduct(null);
            setCarouselPosition(0,0);
            setContentViewMode('viewMode');
            triggerChange();
        }
    }
})();

MicroEvent.mixin(ContentStore);

module.exports = ContentStore;
