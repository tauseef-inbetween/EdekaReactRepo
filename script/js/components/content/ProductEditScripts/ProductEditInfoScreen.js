var ProductEditInfoScreen = React.createClass({
    componentDidUpdate: function () {
        if(this.props.contentViewMode == 'editMode') {
            initialiseLayouts();
        }
    },
    render: function () {
        var productList = this.props.productList;
        var selectedProduct = this.props.selectedProduct;
        var productWorkFlowStatus = this.props.productWorkFlowStatus;
        var productTypes = this.props.productTypes;
        var productClasses = this.props.productClasses;
        var contentViewMode = this.props.contentViewMode;
        var contentViewStyle = this.props.contentViewStyle;
        return (
            <div id="ProductEditInfoScreen" ref="ProductEditInfoScreen">
                <div id="centerDOMMainContainer">
                    <ProductEditNorthContent productList={productList} selectedProduct={selectedProduct}
                                             productWorkFlowStatus={productWorkFlowStatus}
                                             productTypes={productTypes}
                                             productClasses={productClasses}
                                             ref="northDOM" key="2"
                                             contentViewMode={contentViewMode}
                                             contentViewStyle={contentViewStyle}/>
                    <ProductEditCenterContent contentViewMode={contentViewMode} selectedProduct={selectedProduct} ref="centerDOM" key="1"/>
                    <ProductEditEastContent contentViewMode={contentViewMode} selectedProduct={selectedProduct} ref="eastDOM" key="4"/>
                </div>
                <ProductEditWestContent  contentViewMode={contentViewMode} selectedProduct={selectedProduct} ref="westDOM" key="5"/>
            </div>
        );
    }
});