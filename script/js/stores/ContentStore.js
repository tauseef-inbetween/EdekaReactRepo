var ContentListStore = {
  data: allProducts,

  getAllData: function() {
    return this.data;
  },

  createProduct: function() {
    ContentListStore.data.push(createDummyProduct());
    ContentListStore.trigger('change');
  }
};

MicroEvent.mixin( ContentListStore );
