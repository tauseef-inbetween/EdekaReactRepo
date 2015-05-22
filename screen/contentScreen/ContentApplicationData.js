var MockData = require('../../tacks/MockDataForContent');

var ContentApplicationData = {
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

module.exports = ContentApplicationData;