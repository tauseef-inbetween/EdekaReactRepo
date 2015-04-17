var Content = React.createClass({
  getInitialState: function() {
    return{
      productList: [],
      contentViewStyle : 'thumbnail'
    };
  },

  listStateChanged: function() {
    this.setState({
      productList: ContentListStore.getAllData(),
      contentViewStyle: ContentListStore.getContentViewStyle()
    });
  },
  componentWillMount: function () {
    this.listStateChanged();
  },
  componentDidMount: function() {
    ContentListStore.bind( 'change', this.listStateChanged );
  },
  componentWillUnmount: function() {
    ContentListStore.unbind( 'change', this.listStateChanged );
  },


  render: function(){
    var productItems = [];
    var contentViewStyle = this.state.contentViewStyle;
    this.state.productList.map(function(item, i) {
      var productDeleteBtnClickBind = deleteProductButtonClicked.bind(this, item.id);
      var viewStyle = null;
      if(contentViewStyle == 'thumbnail') {
        viewStyle = <ProductThumbnailViewItem key={i} product={item} onClick={productDeleteBtnClickBind}/>;
      } else {
        viewStyle = <ProductDetailViewItem key={i} product={item} onClick={productDeleteBtnClickBind}/>;
      }
      return (
          productItems.push(viewStyle)
      );
    });
    return(
        <div id="contentScreen" className={this.props.className}>
          <div id="topToolsPanel">
            <ContentViewStyle />
            Content
          </div>
          <div className = "ProductWrapper">
            {productItems}
          </div>
        </div>
    )
  }
});