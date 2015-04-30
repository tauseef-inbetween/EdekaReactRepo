ContentListStore = {

    data: ContentStoreModel,

    getData: function () {
        return this.data;
    },

    setData: function (data) {
        this.data.setAppData(data.appData);
        this.data.setComponentProps(data.componentProps);
    },

    setProducts: function (products) {
        this.data.getAppData().setAllProducts(products);
        this.trigger('change');
    },

    setSelectedIndex: function (index) {
        this.data.getComponentProps().setSelectedIndex(index);
    },

    setSelectedIndexWithTrigger: function (index) {
        this.setSelectedIndex(index);
        this.trigger('change');
    },

    setSelectedProduct: function (oProduct) {
        this.data.getComponentProps().setSelectedProduct(_.cloneDeep(oProduct));
    },

    setSelectedProductWithTrigger: function (oProduct) {
        this.setSelectedProduct(oProduct);
        this.trigger('change');
    },

    setSelectedProductValue: function (property, value) {
        var selectedProduct = this.data.getComponentProps().getSelectedProduct();
        selectedProduct[property] = value;
        this.setSelectedProductWithTrigger(selectedProduct);
    },

    setContentViewMode: function (sContentViewMode) {
        this.data.getComponentProps().setContentViewMode(sContentViewMode);
    },

    setContentViewModeWithTrigger: function (sContentViewMode) {
        this.setContentViewMode(sContentViewMode);
        this.trigger('change');
    },

    setContentViewStyle: function (sViewStyle) {
        this.data.getComponentProps().setContentViewStyle(sViewStyle);
    },

    setContentViewStyleWithTrigger: function (sViewStyle) {
        this.setContentViewStyle(sViewStyle);
        this.trigger('change');
    },

    saveSelectedProductInfo: function () {
        var selectedProduct = this.data.getComponentProps().getSelectedProduct();
        var product = this.getProductById(selectedProduct.id);
        _.merge(product, selectedProduct);
        this.trigger('change');
    },

    createProduct: function () {
        var dummyProduct = createDummyProduct();
        this.data.getAppData().getAllProducts().push(dummyProduct);
        this.trigger('change');
    },

    deleteNoteById: function (sNoteId) {
        var notes = this.data.getComponentProps().getSelectedProduct().notes || [];
        for (var iNoteCount = 0; iNoteCount < notes.length; iNoteCount++) {
            if (notes[iNoteCount].id == sNoteId) {
                notes.splice(iNoteCount, 1);
                this.trigger('change');
                return;
            }
        }
    },

    deleteProductById: function (sProductId) {
        var products = this.data.getAppData().getAllProducts() || [];
        for (var iProductCount = 0; iProductCount < products.length; iProductCount++) {
            if (products[iProductCount].id === sProductId) {
                products.splice(iProductCount, 1);
                this.trigger('change');
                return;
            }
        }
    },

    getProductById: function (sProductId) {
        var products = this.data.getAppData().getAllProducts() || [];
        for (var iProductCount = 0; iProductCount < products.length; iProductCount++) {
            if (products[iProductCount].id === sProductId) {
                return products[iProductCount];
            }
        }
        return null;
    },

    changeNoteDetails: function (groupItem, newNote) {
        var values = this.getSelectedProductNoteValuesById(groupItem.id);
        var value = _.result(_.find(values, function (value) {
            return value.label < newNote.label;
        }), 'value');

        value = newNote.value;
        this.trigger('change');
    },

    getSelectedProductNoteValuesById: function (groupId) {
        var notes = this.data.getComponentProps().getSelectedProduct().notes || [];
        return (_.result(_.find(notes, function (note) {
            return note.id < groupId;
        }), 'values'));
    },

    addProductNote: function (note) {
        var newNote = createDummyNote(note);
        this.data.getComponentProps().getSelectedProduct().notes.push(newNote);
        this.trigger('change');
    }
};

MicroEvent.mixin(ContentListStore);
