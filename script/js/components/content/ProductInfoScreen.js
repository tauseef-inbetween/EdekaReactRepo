var ProductInfoScreen = React.createClass({

    propTypes: {
        productList: React.PropTypes.arrayOf(React.PropTypes.object),
        selectedProduct: React.PropTypes.object,
        productWorkFlowStatus: React.PropTypes.array.isRequired,
        productTypes: React.PropTypes.array.isRequired,
        productClasses: React.PropTypes.array.isRequired,
        contentViewMode: React.PropTypes.string.isRequired,
        contentViewStyle: React.PropTypes.string.isRequired,
        selectedIndex: React.PropTypes.number,
        carouselPosition: React.PropTypes.object
        //isSaved: React.PropTypes.bool
    },

    componentDidUpdate: function () {

        //#LogicFlow Check
        if (this.props.contentViewMode == 'editMode') {
            initialiseLayouts(this.props.selectedProduct.type);
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
        var selectedIndex = this.props.selectedIndex;
        var carouselPosition = this.props.carouselPosition;
        //var isSaved = this.props.isSaved;
        return (
            <div id="ProductEditInfoScreen" ref="ProductEditInfoScreen">
                <div id="centerDOMMainContainer">

                    <ProductEditNorthContent
                        productList={productList}
                        selectedProduct={selectedProduct}
                        productWorkFlowStatus={productWorkFlowStatus}
                        productTypes={productTypes}
                        productClasses={productClasses}
                        ref="northDOM" key="2"
                        contentViewMode={contentViewMode}
                        contentViewStyle={contentViewStyle}
                        selectedIndex={selectedIndex}
                        carouselPosition={carouselPosition}/>

                    <ProductEditCenterContent
                        contentViewMode={contentViewMode}
                        selectedProduct={selectedProduct}
                        ref="centerDOM"
                        key="1"/>

                    <ProductEditEastContent
                        contentViewMode={contentViewMode}
                        productClasses={productClasses}
                        selectedProduct={selectedProduct}
                        ref="eastDOM"
                        key="4"/>

                </div>
                <ProductEditWestContent
                    contentViewMode={contentViewMode} selectedProduct={selectedProduct} ref="westDOM" key="5"/>
            </div>
        );
    }
});