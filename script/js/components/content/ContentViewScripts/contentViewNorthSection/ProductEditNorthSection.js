var ProductEditNorthContent = React.createClass({

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

    render: function () {
        var contentViewStyle = this.props.contentViewStyle;
        var selectedProduct = this.props.selectedProduct;
        var selectedIndex = this.props.selectedIndex;
        var productWorkFlowStatus = this.props.productWorkFlowStatus;
        var productTypes = this.props.productTypes;
        var productClasses = this.props.productClasses;
        var productWrapperClass = (this.props.contentViewMode == 'editMode') ? 'owl-carousel' : 'ProductWrapper';
        var editModeDisabledClass = (this.props.contentViewMode == 'editMode') ? '' : 'productViewMode';
        var carouselPosition=  this.props.carouselPosition;
        var that = this;
        //var isSaved = this.props.isSaved;

        //#LogicFlow #DataCreation
        var productItems = _.map(that.props.productList, function (item, i) {
            var productDeleteBtnClickBind = deleteProductButtonClicked.bind(that, item.id);
            var productThumbnailBtnClicked = productThumbClicked.bind(that, item.id, i);
            return (
                <ProductThumbnailViewItem key={item.id}
                                          product={item}
                                          ref={'item' + i}
                                          onProductClick={productThumbnailBtnClicked}
                                          onDeleteClick={productDeleteBtnClickBind}
                                          contentViewStyle={contentViewStyle}/>
            );
        });

        var productItemView = (this.props.contentViewMode == 'editMode') ?
            <Carousel items={productItems} selectedIndex={selectedIndex} key="carousel" carouselPosition={carouselPosition}/> : (
            <ReactCSSTransitionGroup transitionName="productTransition">{productItems}</ReactCSSTransitionGroup>);

        return (
            <div id="northDOM" className="ui-layout-north ">
                <div id="centerOwlContainer" className={productWrapperClass}>
                    {productItemView}
                </div>
                <div id="basicProductInfoContainer" className={editModeDisabledClass}>
                    <ProductBasicInfoForm selectedProduct={selectedProduct}
                                          productWorkFlowStatus={productWorkFlowStatus}
                                          productTypes={productTypes}
                                          productClasses={productClasses}
                        />
                </div>
            </div>
        );
    }
});