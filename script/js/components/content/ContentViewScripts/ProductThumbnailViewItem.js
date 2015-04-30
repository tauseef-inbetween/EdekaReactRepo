var ProductThumbnailViewItem = React.createClass({

    propTypes: {
        product: React.PropTypes.object.isRequired,
        contentViewStyle: React.PropTypes.string.isRequired,
        onDeleteClick: React.PropTypes.func,
        onProductClick: React.PropTypes.func
    },

    render: function () {
        var product = this.props.product;
        var productTitle = product.title + " | " + product.type + " | " + product.workflowStatus;
        var viewTypeClass = (this.props.contentViewStyle == 'thumbnail') ? 'pimThumbView' : 'pimDetailView';
        var imageDiv = '';
        var descriptionDiv = '';
        if(this.props.contentViewStyle == 'thumbnail') {
            imageDiv = <div className="PIMThumbImage"><img src={product.image[0]}></img></div>;
        } else {
            descriptionDiv = <div className="PIMThumbDescription">Description: {product.description}</div>;
        }
        return (
            <div className="PIMThumbContainer" title={productTitle} key={product.id} data-type={product.type}
                 data-workflow-status={product.workflowStatus}>
                <div className="PIMProductThumbDelete" title="Delete" onClick={this.props.onDeleteClick}></div>
                <div className={viewTypeClass} onClick={this.props.onProductClick}>
                    {imageDiv}
                    <div id="PIMViewScrollDiv">
                        <div className="PIMThumbName">
                            <div className="PIMThumbLabel">{product.id} | {product.label}</div>
                        </div>
                        <div className="PIMThumbTitle">Title: {product.title}</div>
                        {descriptionDiv}
                        <div className="PIMThumbTag" data-title=""></div>
                    </div>
                </div>
            </div>
        )
    }
});