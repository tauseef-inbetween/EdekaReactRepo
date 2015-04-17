var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var Content = React.createClass({
  getInitialState: function () {
    return {
      productList: [],
      contentViewStyle: 'thumbnail'
    };
  },

  listStateChanged: function () {
    this.setState({
      productList: ContentListStore.getAllData(),
      contentViewStyle: ContentListStore.getContentViewStyle()
    });
  },
  componentWillMount: function () {
    this.listStateChanged();
  },
  componentDidMount: function () {
    ContentListStore.bind('change', this.listStateChanged);
  },
  componentWillUnmount: function () {
    ContentListStore.unbind('change', this.listStateChanged);
  },


  render: function () {
    var contentViewStyle = this.state.contentViewStyle;
    var productItems = this.state.productList.map(function (item, i) {
      var productDeleteBtnClickBind = deleteProductButtonClicked.bind(this, item.id);
      if (contentViewStyle == 'thumbnail') {
        return (
            <ProductThumbnailViewItem key={item.id} product={item} onClick={productDeleteBtnClickBind}/>
        );
      } else {
        return (
            <ProductDetailViewItem key={item.id} product={item} onClick={productDeleteBtnClickBind}/>
        );
      }
    });
    return (
        <div id="contentScreen" className={this.props.className}>
          <div id="topToolsPanel">
            <ContentViewStyle />
          Content
          </div>
          <div className = "ProductWrapper">
            <ReactCSSTransitionGroup transitionName="example">
              {productItems}
            </ReactCSSTransitionGroup>
          </div>
        </div>
    )
  }
});