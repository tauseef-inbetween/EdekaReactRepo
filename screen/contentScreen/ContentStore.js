var MicroEvent = require('../../libraries/js/flux/MicroEvent.js');
var ContentApplicationData = require('./ContentApplicationData');
var ContentComponentProperties = require('./ContentComponentProperties');
var ContentUtils = require('./utils/ContentUtils');
var _ = require('lodash');

var ContentStore = {

    data: {appData: ContentApplicationData, componentProps: ContentComponentProperties},

    getData: function () {
        return this.data;
    },

    setProducts: function (products) {
        this.data.appData.setAllProducts(products);
        this.triggerChange();
    },

    setSelectedIndex: function (index) {
        this.data.componentProps.getSelectedProps().setSelectedIndex(index);
    },

    setSelectedProduct: function (oProduct) {
        this.data.componentProps.getSelectedProps().setSelectedProduct(_.clone(oProduct, true));
    },

    setSelectedProductValue: function (property, value) {

        if (property == 'class') {
            this.addDefaultNotes(value);
        }

        var selectedProduct = this.data.componentProps.getSelectedProps().getSelectedProduct();
        selectedProduct[property] = value;
        this.setSelectedProduct(selectedProduct);
        this.triggerChange();
    },

    setContentViewMode: function (sContentViewMode) {
        this.data.componentProps.setContentViewMode(sContentViewMode);
    },

    changeContentViewMode: function (sContentViewMode) {
        this.setContentViewMode(sContentViewMode);
        this.triggerChange();
    },

    setContentViewStyle: function (sViewStyle) {
        this.data.componentProps.setContentViewStyle(sViewStyle);
    },

    changeContentViewStyle: function (sViewStyle) {
        this.setContentViewStyle(sViewStyle);
        this.triggerChange();
    },

    saveSelectedProductInfo: function () {
        var selectedProduct = this.data.componentProps.getSelectedProps().getSelectedProduct();
        var product = this.getProductById(selectedProduct.id);
        _.assign(product, selectedProduct);
        this.triggerChange();
    },

    createProduct: function () {
        var dummyProduct = ContentUtils.createDummyProduct();
        this.data.appData.getAllProducts().push(dummyProduct);
        this.triggerChange();
    },

    deleteNoteById: function (sNoteId) {
        var notes = this.data.componentProps.getSelectedProps().getSelectedProduct().notes || [];
        for (var iNoteCount = 0; iNoteCount < notes.length; iNoteCount++) {
            if (notes[iNoteCount].id == sNoteId) {
                notes.splice(iNoteCount, 1);
                this.triggerChange();
                return;
            }
        }
    },

    deleteProductById: function (sProductId) {
        var products = this.data.appData.getAllProducts() || [];
        for (var iProductCount = 0; iProductCount < products.length; iProductCount++) {
            if (products[iProductCount].id === sProductId) {
                products.splice(iProductCount, 1);
                this.triggerChange();
                return;
            }
        }
    },

    getProductById: function (sProductId) {
        var products = this.data.appData.getAllProducts() || [];
        for (var iProductCount = 0; iProductCount < products.length; iProductCount++) {
            if (products[iProductCount].id === sProductId) {
                return products[iProductCount];
            }
        }
        return null;
    },

    addDefaultNotes: function (classValue) {
        var groups = _.result(_.find(this.data.appData.getProductClasses(),'label',classValue), 'groups');
        var defaultNotes = _.where(groups, { 'defaultValue': true});
        var selectedProductNotes = this.data.componentProps.getSelectedProps().getSelectedProduct().notes;
        var notesToAdd = _.filter(defaultNotes, function(obj){ return !_.findWhere(selectedProductNotes, {'type' : obj.label}); });
        var that = this;
        _.map(notesToAdd, function (note){
            that.addProductNote(note);
        });
    },

    changeNoteDetails: function (groupItem, newNote) {
        var values = this.getSelectedProductNoteValuesById(groupItem.id);
        var value = _.result(_.find(values, function (value) {
            return value.label == newNote.label;
        }), 'value');

        value = newNote.value;
        //_.assign(value,newNote.value);
        var selectedProduct = this.data.componentProps.getSelectedProps().getSelectedProduct();
        this.setSelectedProduct(selectedProduct);
        this.triggerChange();
    },

    getSelectedProductNoteValuesById: function (groupId) {
        var notes = this.data.componentProps.getSelectedProps().getSelectedProduct().notes || [];
        return (_.result(_.find(notes, function (note) {
            return note.id == groupId;
        }), 'values'));
    },

    addProductNote: function (note) {
        var newNote = ContentUtils.createDummyNote(note);
        this.data.componentProps.getSelectedProps().getSelectedProduct().notes.push(newNote);
    },

    setCarouselLeftPosition: function (leftPosition) {
        this.data.componentProps.getCarouselPosition().leftPosition = leftPosition;
    },

    setCarouselPreviousLeftPosition: function (previousLeft) {
        if(previousLeft == undefined) {
            previousLeft = this.data.componentProps.getCarouselPosition().leftPosition;
        }
        this.data.componentProps.getCarouselPosition().previousLeftPosition = previousLeft;
    },

    setCarouselPosition: function (currLeft, previousLeft) {
        this.setCarouselLeftPosition(currLeft);
        this.setCarouselPreviousLeftPosition(previousLeft);
    },

    changeCarouselLeftPosition: function (leftPosition) {
        this.setCarouselLeftPosition(leftPosition);
        this.triggerChange();
    },

    changeProductNoteList: function (note) {
        this.addProductNote(note);
        this.triggerChange();
    },

    changeSelectedNoteIndex: function (index) {
        this.data.componentProps.getSelectedProps().setSelectedNoteIndex(index);
        this.triggerChange();
    },

    changeSelectedProductOnThumbClick: function (productId, index) {
        this.setSelectedProduct(this.getProductById(productId));
        this.setSelectedIndex(index);
        this.setContentViewMode('editMode');
        this.triggerChange();
    },

    triggerChange: function () {
        this.trigger('change');
    }

};

MicroEvent.mixin(ContentStore);

module.exports = ContentStore;