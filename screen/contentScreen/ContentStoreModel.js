var ContentStoreModel = (function () {

    var appData = {
        allProducts: [],
        productTypes: MockData.productTypes,
        productWorkflowStatus: MockData.productWorkflowStatus,
        productClasses: MockData.productClasses,

        getAllProducts: function () {
            return this.allProducts;
        },

        setAllProducts: function (productList) {
            this.allProducts = productList;
        },

        getProductTypes: function () {
            return this.productTypes;
        },

        setProductTypes: function (productTypes) {
            this.productTypes = productTypes;
        },

        getProductWorkflowStatus: function () {
            return this.productWorkflowStatus;
        },

        setProductWorkflowStatus: function (productWorkflowStatus) {
            this.productWorkflowStatus = productWorkflowStatus;
        },

        getProductClasses: function () {
            return this.productClasses;
        },

        setProductClasses: function (productClasses) {
            this.productClasses = productClasses;
        }

    };

    var componentProps = {
        contentViewStyle: 'thumbnail',
        contentViewMode: 'viewMode',

        selectedProps: {
            selectedProduct: null,
            selectedIndex: 0,
            selectedNoteIndex: -1,

            getSelectedProduct: function () {
                return this.selectedProduct;
            },

            setSelectedProduct: function (selectedProduct) {
                this.selectedProduct = selectedProduct;
                this.selectedNoteIndex = -1;
            },

            setSelectedIndex: function (selectedIndex) {
                this.selectedIndex = selectedIndex;
            },

            setSelectedNoteIndex: function (selectedIndex) {
                this.selectedNoteIndex = selectedIndex;
            }
        },

        carouselPosition :{
            leftPosition: 0,
            previousLeftPosition: 0
        },

        getContentViewStyle: function () {
            return this.contentViewStyle;
        },

        setContentViewStyle: function (contentViewStyle) {
            this.contentViewStyle = contentViewStyle;
        },

        getContentViewMode: function () {
            return this.contentViewMode;
        },

        setContentViewMode: function (contentViewMode) {
            this.contentViewMode = contentViewMode;
        },

        getSelectedProps: function () {
          return this.selectedProps;
        },

        getCarouselPosition: function () {
            return this.carouselPosition;
        }
    };

    return {

        getAppData: function () {
            return appData;
        },

        getComponentProps: function () {
            return componentProps;
        },

        setAppData: function (appData_p) {
            appData = appData_p;
        },

        setComponentProps: function (componentProps_p) {
            componentProps = componentProps_p;
        }
    };
})();


