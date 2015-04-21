ContentListStore = {
    data: allProducts,

    contentViewStyle: 'thumbnail',

    contentViewMode: 'viewMode',

    selectedProduct: null,

    productTypes: productTypes,

    productWorkflowStatus: productWorkflowStatus,

    productClasses: productClasses,

    getAllData: function () {
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

    setSelectedProduct: function (oProduct) {
        this.selectedProduct = oProduct;
        this.trigger('change');
    },

    setContentViewMode: function (sContentViewMode) {
        this.contentViewMode = sContentViewMode;
        this.trigger('change');
    },

    setContentViewStyle: function (sViewStyle) {
        this.contentViewStyle = sViewStyle;
        this.trigger('change');
    },

    createProduct: function () {
        this.data.push(createDummyProduct());
        this.trigger('change');
    },

    deleteProductById: function (sProductId) {
        var products = this.data || [];
        for (var iProductCount = 0; iProductCount < products.length; iProductCount++) {
            if (products[iProductCount].id === sProductId) {
                products.splice(iProductCount, 1);
                this.trigger('change');
                break;
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
    }
};

MicroEvent.mixin(ContentListStore);
