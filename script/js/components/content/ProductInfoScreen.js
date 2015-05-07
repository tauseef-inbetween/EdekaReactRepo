var ProductInfoScreen = React.createClass({

    propTypes: {
        productList: React.PropTypes.arrayOf(React.PropTypes.object),
        selectedProps: React.PropTypes.object,
        productWorkFlowStatus: React.PropTypes.array.isRequired,
        productTypes: React.PropTypes.array.isRequired,
        productClasses: React.PropTypes.array.isRequired,
        contentViewMode: React.PropTypes.string.isRequired,
        contentViewStyle: React.PropTypes.string.isRequired,
        carouselPosition: React.PropTypes.object
        //isSaved: React.PropTypes.bool
    },

    componentDidUpdate: function () {

        //#LogicFlow Check
        if (this.props.contentViewMode == 'editMode') {
            initialiseLayouts(this.props.selectedProps.selectedProduct.type);
        }
    },
    render: function () {
        var productList = this.props.productList;
        var selectedProps = this.props.selectedProps;
        var productWorkFlowStatus = this.props.productWorkFlowStatus;
        var productTypes = this.props.productTypes;
        var productClasses = this.props.productClasses;
        var contentViewMode = this.props.contentViewMode;
        var contentViewStyle = this.props.contentViewStyle;
        var carouselPosition = this.props.carouselPosition;
        //var isSaved = this.props.isSaved;
        return (
            <div id="ProductEditInfoScreen" ref="ProductEditInfoScreen">
                <div id="centerDOMMainContainer">

                    <ProductCarousel
                        productList={productList}
                        selectedProps={selectedProps}
                        productWorkFlowStatus={productWorkFlowStatus}
                        productTypes={productTypes}
                        productClasses={productClasses}
                        ref="northDOM" key="2"
                        contentViewMode={contentViewMode}
                        contentViewStyle={contentViewStyle}
                        carouselPosition={carouselPosition}/>

                    <ProductImageCarousel
                        contentViewMode={contentViewMode}
                        selectedProps={selectedProps}
                        ref="centerDOM"
                        key="1"/>

                    <ProductNotes
                        contentViewMode={contentViewMode}
                        productClasses={productClasses}
                        selectedProps={selectedProps}
                        ref="eastDOM"
                        key="4"/>

                </div>
                <ProductTags
                    contentViewMode={contentViewMode} selectedProps={selectedProps} ref="westDOM" key="5"/>
            </div>
        );
    }
});