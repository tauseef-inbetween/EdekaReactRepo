ContentListStore = {
    data: ContentData.allProducts,

    contentViewStyle: ContentData.contentViewStyle,
    contentViewMode: ContentData.contentViewMode,
    selectedProduct: ContentData.selectedProduct,
    productTypes: ContentData.productTypes,
    productWorkflowStatus: ContentData.productWorkflowStatus,
    productClasses: ContentData.productClasses,
    selectedIndex: ContentData.selectedIndex,

    getData: function () {
        return this.data;
    },

    getContentViewStyle: function () {
        return this.contentViewStyle;
    },

    getContentViewMode: function () {
        return this.contentViewMode;
    },

    getSelectedProduct: function () {
        return this.selectedProduct;
    },

    getProductTypes: function () {
        return this.productTypes;
    },

    getProductWorkflowStatus: function () {
        return this.productWorkflowStatus;
    },

    getProductClasses: function () {
        return this.productClasses;
    },

    getSelectedIndex: function () {
        return this.selectedIndex;
    },

    setData: function (data) {
      this.data = data;
    },

    setSelectedIndex: function (index) {
        this.selectedIndex = index;
    },

    setSelectedProduct: function (oProduct) {
        this.selectedProduct  = _.cloneDeep(oProduct);
    },

    setSelectedProductWithTrigger: function (oProduct) {
        this.setSelectedProduct(oProduct);
        this.trigger('change');
    },

    setSelectedProductValue: function (property, value) {
        if(property == 'label'){
            this.selectedProduct['title'] = value;
        }
        this.selectedProduct[property] = value;
        this.trigger('change');
    },

    setContentViewMode: function (sContentViewMode) {
        this.contentViewMode = sContentViewMode;
    },

    setContentViewModeWithTrigger: function (sContentViewMode) {
        this.setContentViewMode(sContentViewMode);
        this.trigger('change');
    },

    setContentViewStyle: function (sViewStyle) {
        this.contentViewStyle = sViewStyle;
    },

    setContentViewStyleWithTrigger: function (sViewStyle) {
        this.setContentViewStyle(sViewStyle);
        this.trigger('change');
    },

    saveSelectedProductInfo: function () {
        var product = this.getProductById(this.selectedProduct.id);
        _.merge(product, this.selectedProduct);
        this.trigger('change');
    },

    createProduct: function () {
        this.data.push(createDummyProduct());
        this.trigger('change');
    },

    deleteNoteById: function (sNoteId) {
        var notes = this.selectedProduct.notes || [];
        for(var iNoteCount = 0; iNoteCount < notes.length; iNoteCount++) {
            if(notes[iNoteCount].id == sNoteId) {
                notes.splice(iNoteCount, 1);
                this.trigger('change');
                return;
            }
        }
    },

    deleteProductById: function (sProductId) {
        var products = this.data || [];
        for (var iProductCount = 0; iProductCount < products.length; iProductCount++) {
            if (products[iProductCount].id === sProductId) {
                products.splice(iProductCount, 1);
                this.trigger('change');
                return;
            }
        }
    },

    getProductById: function (sProductId) {
        var products = this.data || [];
        for (var iProductCount = 0; iProductCount < products.length; iProductCount++) {
            if (products[iProductCount].id === sProductId) {
                return products[iProductCount];
            }
        }
        return null;
    },

    changeNoteDetails: function (groupItem, newNote){
        var values = this.getSelectedProductNoteById(groupItem.id);

        var value = _.result(_.find(values, function(value) {
         return value.label < newNote.label;
         }), 'value');

         value = newNote.value;
         this.trigger('change');

        /*var note = this.getSelectedProductNoteById(groupItem.id);
        if(note) {
            for(var iNoteCount = 0; iNoteCount < note.values.length; iNoteCount++) {
                if(note.values[iNoteCount].label == newNote.label) {
                    note.values[iNoteCount] = newNote;
                    this.trigger('change');
                    return;
                }
            }
        }*/
    },

    getSelectedProductNoteById: function (groupId) {

        var notes = this.selectedProduct.notes || [];
        return (_.result(_.find(notes, function(note) {
            return note.id < groupId;
        }), 'values'));

        /*var notes = this.selectedProduct.notes || [];
        for(var iNoteCount = 0; iNoteCount < notes.length; iNoteCount++) {
            if(notes[iNoteCount].id == groupId) {
                return notes[iNoteCount];
            }
        }
        return null;*/
    },

    addProductNote: function (newNote) {
        this.selectedProduct.notes.push(newNote);
        this.trigger('change');
    }
};

MicroEvent.mixin(ContentListStore);
