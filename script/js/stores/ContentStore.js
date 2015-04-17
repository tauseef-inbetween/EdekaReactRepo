ContentListStore = {
  data: allProducts,

  contentViewStyle: 'thumbnail',

  getAllData: function() {
    return this.data;
  },

  getContentViewStyle: function () {
    return this.contentViewStyle;
  },

  setContentViewStyle: function (sViewStyle) {
    this.contentViewStyle = sViewStyle;
    this.trigger('change');
  },

  createProduct: function() {
    this.data.push(createDummyProduct());
    this.trigger('change');
  },

  deleteProductById: function (sProductId) {
    var products = this.data || [];
    for(var iProductCount = 0; iProductCount < products.length; iProductCount++) {
      if(products[iProductCount].id === sProductId) {
        products.splice(iProductCount, 1);
        this.trigger('change');
        break;
      }
    }
  },

  getProductById: function (sProductId) {
    var products = this.data || [];
    for(var iProductCount = 0; iProductCount < products.length; iProductCount++) {
      if(products[iProductCount].id === sProductId) {
        return products[iProductCount];
      }
    }
    return null;
  }
};

MicroEvent.mixin( ContentListStore );
