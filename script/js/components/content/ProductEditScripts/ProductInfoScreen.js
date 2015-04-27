var ProductInfoScreen = React.createClass({
    componentDidUpdate: function () {
        if(this.props.contentViewMode == 'editMode') {
            initialiseLayouts();
        }
    },
    render: function () {
        var selectedProduct = this.props.selectedProduct;
        var contentViewMode = this.props.contentViewMode;
        return (
            <div id="ProductEditInfoScreen" ref="ProductEditInfoScreen">
                <div id="centerDOMMainContainer">
                    <ProductEditNorthContent {...this.props}/>
                    <ProductEditCenterContent contentViewMode={contentViewMode} selectedProduct={selectedProduct} ref="centerDOM" key="1"/>
                    <ProductEditEastContent contentViewMode={contentViewMode} selectedProduct={selectedProduct} ref="eastDOM" key="4"/>
                </div>
                <ProductEditWestContent  contentViewMode={contentViewMode} selectedProduct={selectedProduct} ref="westDOM" key="5"/>
            </div>
        );
    }
});