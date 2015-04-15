var PIMThumbImage = React.createClass({
  render: function(){
    return(
        <div className="PIMThumbImage">
          <img src={this.props.imagSRC}></img>
        </div>
    )
  }
});

var PIMScrollDiv = React.createClass({
  render: function(){
    var product = this.props.product;
    return(
        <div id="PIMViewScrollDiv">
          <div className="PIMThumbName">
            <div className="PIMThumbLabel">{product.id} | {product.title}</div>
          </div>
          <div className="PIMThumbTitle">Title: {product.title}</div>
          <div className="PIMThumbTag" data-title=""></div>
        </div>
    )
  }
});
var PimThumbView = React.createClass({
  render: function(){
    return (
        <div className="pimThumbView">
          <PIMThumbImage imagSRC={this.props.product.image[0]}/>
          <PIMScrollDiv product={this.props.product}/>
        </div>
    )
  }
});


var ProductItem = React.createClass({
  render: function () {
    return (
        <div className="PIMThumbContainer">
          <div className="PIMProductThumbDelete tooltipstered" data-title="Delete"></div>
          <PimThumbView product={this.props.product}/>
        </div>
    )
  }
});

var ProductWrapper = React.createClass({
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
      return (
          productItems.push(<ProductItem key={i} product={item}/>)
      );
    });
    return(
        <div>
          <div id="topToolsPanel">Content</div>
          <div className = "ProductWrapper">
            {productItems}
          </div>
        </div>
    )
  }
});