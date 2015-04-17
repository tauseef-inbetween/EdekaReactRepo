var ProductDetailViewItem = React.createClass({
  render: function () {
    var product = this.props.product;
    return (
    <div className="PIMThumbContainer" data-type={this.props.product.type} data-workflow-status={this.props.product.workflowStatus}>
      <div className="PIMProductThumbDelete" title="Delete" onClick={this.props.onClick}></div>
      <div className="pimDetailView">
        <div className="PIMThumbName">
          <div className="PIMThumbLabel">{product.id} | {product.title}</div>
        </div>
        <div id="PIMView2ScrollDiv">
          <div className="PIMThumbTitle">Title: {product.title}</div>
          <div className="PIMThumbDescription">Description: {product.description}</div>
          <div className="PIMThumbTag" data-title=""></div>
        </div>
      </div>
    </div>
    )
  }
});