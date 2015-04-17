var ProductThumbnailViewItem = React.createClass({
  render: function () {
    return (
        <div className="PIMThumbContainer" data-type={this.props.product.type} data-workflow-status={this.props.product.workflowStatus}>
          <div className="PIMProductThumbDelete" title="Delete" onClick={this.props.onClick}></div>
          <PimThumbView product={this.props.product}/>
        </div>
    )
  }
});