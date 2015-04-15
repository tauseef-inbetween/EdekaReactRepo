var ContentListStore = {
  data: products,

  getAllData: function() {
    return this.data;
  }

};

MicroEvent.mixin( ContentListStore );
