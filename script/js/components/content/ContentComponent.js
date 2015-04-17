var Content = React.createClass({
  getInitialState: function() {
    return{
      productList: ContentListStore.getAllData()
    };
  },

  listStateChanged: function() {
    this.setState({productList: ContentListStore.getAllData()});
  },
  componentDidMount: function() {
    ContentListStore.bind( 'change', this.listStateChanged );
  },
  componentWillUnmount: function() {
    ContentListStore.unbind( 'change', this.listStateChanged );
  },


  render: function(){
    var productItems = [];
    this.state.productList.map(function(item, i) {
      var productDeleteBtnClickBind = deleteProductButtonClicked.bind(this, item.id);
      return (
          productItems.push(<ProductItem key={i} product={item} onClick={productDeleteBtnClickBind}/>)
      );
    });
    return(
        <div id="contentScreen" className={this.props.className}>
          <div id="topToolsPanel">Content</div>
          <div className = "ProductWrapper">
            {productItems}
          </div>
        </div>
    )
  }
});