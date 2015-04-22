var ProductEditInfoScreen = React.createClass({
    componentDidMount: function () {
        initialiseLayouts();
    },
    render: function () {
        var productList = this.props.productList;
        var selectedProduct = this.props.selectedProduct;
        var productWorkFlowStatus = this.props.productWorkFlowStatus;
        var productTypes = this.props.productTypes;
        var productClasses = this.props.productClasses;
        var productItems = this.props.productItems;
        return (
            <div id="ProductEditInfoScreen" ref="ProductEditInfoScreen">
                <div id="centerDOMMainContainer">
                    <ProductEditNorthContent productList={productList} selectedProduct={selectedProduct}
                                             productWorkFlowStatus={productWorkFlowStatus}
                                             productTypes={productTypes}
                                             productClasses={productClasses}
                                             ref="northDOM" key="2"
                                             productItems={productItems}/>
                    <ProductEditCenterContent selectedProduct={selectedProduct} ref="centerDOM" key="1"/>
                    <ProductEditEastContent  selectedProduct={selectedProduct} ref="eastDOM" key="4"/>
                </div>
                <ProductEditWestContent  selectedProduct={selectedProduct} ref="westDOM" key="5"/>
            </div>
        );
    }
});