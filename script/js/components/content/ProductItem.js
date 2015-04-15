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