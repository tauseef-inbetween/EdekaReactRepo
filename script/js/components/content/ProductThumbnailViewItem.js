var ProductThumbnailViewItem = React.createClass({
  render: function () {
    var product = this.props.product;
    var productTitle = product.title + " | " + product.type + " | " + product.workflowStatus;
    return (
          <div className="PIMThumbContainer" title={productTitle} key={product.id} data-type={product.type} data-workflow-status={product.workflowStatus}>
              <div className="PIMProductThumbDelete" title="Delete" onClick={this.props.onClick}></div>
              <PimThumbView product={this.props.product} key={product.id + "Thumb"}/>
          </div>
    )
  }
});