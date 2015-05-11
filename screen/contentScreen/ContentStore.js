var ContentStore = {

    data: {appData: ContentApplicationData, componentProps: ContentComponentProperties},

    getData: function () {
        return this.data;
    },

    setProducts: function (products) {
        this.data.appData.setAllProducts(products);
        this.trigger('change');
    },

    setSelectedIndex: function (index) {
        this.data.componentProps.getSelectedProps().setSelectedIndex(index);
    },

    setSelectedProduct: function (oProduct) {
        this.data.componentProps.getSelectedProps().setSelectedProduct(_.clone(oProduct, true));
    },

    setSelectedProductWithTrigger: function (oProduct) {
        this.setSelectedProduct(oProduct);
        this.trigger('change');
    },

    setSelectedProductValue: function (property, value) {

        if (property == 'class') {
            this.addDefaultNotes(value);
        }

        var selectedProduct = this.data.componentProps.getSelectedProps().getSelectedProduct();
        selectedProduct[property] = value;
        this.setSelectedProductWithTrigger(selectedProduct);
    },

    setContentViewMode: function (sContentViewMode) {
        this.data.componentProps.setContentViewMode(sContentViewMode);
    },

    setContentViewModeWithTrigger: function (sContentViewMode) {
        this.setContentViewMode(sContentViewMode);
        this.trigger('change');
    },

    setContentViewStyle: function (sViewStyle) {
        this.data.componentProps.setContentViewStyle(sViewStyle);
    },

    setContentViewStyleWithTrigger: function (sViewStyle) {
        this.setContentViewStyle(sViewStyle);
        this.trigger('change');
    },

    saveSelectedProductInfo: function () {
        var selectedProduct = this.data.componentProps.getSelectedProps().getSelectedProduct();
        var product = this.getProductById(selectedProduct.id);
        _.assign(product, selectedProduct);
        this.trigger('change');
    },

    createProduct: function () {
        var dummyProduct = createDummyProduct();
        this.data.appData.getAllProducts().push(dummyProduct);
        this.trigger('change');
    },

    deleteNoteById: function (sNoteId) {
        var notes = this.data.componentProps.getSelectedProps().getSelectedProduct().notes || [];
        for (var iNoteCount = 0; iNoteCount < notes.length; iNoteCount++) {
            if (notes[iNoteCount].id == sNoteId) {
                notes.splice(iNoteCount, 1);
                this.trigger('change');
                return;
            }
        }
    },

    deleteProductById: function (sProductId) {
        var products = this.data.appData.getAllProducts() || [];
        for (var iProductCount = 0; iProductCount < products.length; iProductCount++) {
            if (products[iProductCount].id === sProductId) {
                products.splice(iProductCount, 1);
                this.trigger('change');
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
            return value.label < newNote.label;
        }), 'value');

        _.assign(value,newNote.value);
        this.trigger('change');
    },

    getSelectedProductNoteValuesById: function (groupId) {
        var notes = this.data.componentProps.getSelectedProps().getSelectedProduct().notes || [];
        return (_.result(_.find(notes, function (note) {
            return note.id < groupId;
        }), 'values'));
    },

    addProductNote: function (note) {
        var newNote = createDummyNote(note);
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

    setCarouselLeftPositionWithTrigger: function (leftPosition) {
        this.setCarouselLeftPosition(leftPosition);
        this.trigger('change');
    },

    addProductNoteWithTrigger: function (note) {
        this.addProductNote(note);
        this.trigger('change');
    },

    setSelectedNoteIndexWithTrigger: function (index) {
        this.data.componentProps.getSelectedProps().setSelectedNoteIndex(index);
        this.trigger('change');
    }
};

MicroEvent.mixin(ContentStore);
