var ProductEditNorthContent = React.createClass({
    render: function () {
        var selectedProduct = this.props.selectedProduct;
        var productWorkFlowStatus = this.props.productWorkFlowStatus;
        var productTypes = this.props.productTypes;
        var productClasses = this.props.productClasses;
        var productItems = this.props.productItems;
        return (
            <div id="northDOM" className="ui-layout-north">
                <div id="centerOwlContainer">
                    <div id="productOwlWrapper">
                        {productItems}
                    </div>
                </div>
                <div id="basicProductInfoContainer">
                    <ProductBasicInfoForm selectedProduct={selectedProduct}
                                          productWorkFlowStatus={productWorkFlowStatus} productTypes={productTypes}
                                          productClasses={productClasses}/>
                </div>
            </div>
        );
    }
});