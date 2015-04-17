var ProductItem = React.createClass({
  render: function () {
    return (
        <div className="PIMThumbContainer">
          <div className="PIMProductThumbDelete tooltipstered" data-title="Delete" onClick={this.props.onClick}></div>
          <PimThumbView product={this.props.product}/>
        </div>
    )
  }
});