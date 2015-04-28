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
