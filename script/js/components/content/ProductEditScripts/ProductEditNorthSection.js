var ProductEditNorthContent = React.createClass({
    componentDidUpdate: function () {
        if(this.props.contentViewMode == 'editMode') {
            var $container = $('#centerOwlContainer');
            if($container && $container.data('owlCarousel')) {
                $container.data('owlCarousel').reinit();
            } else {
                $container.owlCarousel({
                    items: 6,
                    lazyLoad: true,
                    scrollPerPage: true,
                    pagination: false,
                    navigation: true
                });
            }
        }
    },
    render: function () {
        var contentViewStyle = this.props.contentViewStyle;
        var selectedProduct = this.props.selectedProduct;
        var productWorkFlowStatus = this.props.productWorkFlowStatus;
        var productTypes = this.props.productTypes;
        var productClasses = this.props.productClasses;
        var productWrapperClass = (this.props.contentViewMode == 'editMode') ? 'owl-carousel' : 'ProductWrapper';
        var editModeDisabledClass = (this.props.contentViewMode == 'editMode') ? '' : 'productViewMode';
        var productItems = _.map(this.props.productList, function (item, i) {
            var productDeleteBtnClickBind = deleteProductButtonClicked.bind(this, item.id);
            var productThumbnailBtnClicked = productThumbClicked.bind(this, item.id);
            return (
                <ProductThumbnailViewItem key={item.id}
                                          product={item}
                                          ref={'item' + i}
                                          onProductClick={productThumbnailBtnClicked}
                                          onDeleteClick={productDeleteBtnClickBind}
                                          contentViewStyle={contentViewStyle}/>
            );
        });
        var productItemView = (this.props.contentViewMode == 'editMode') ? productItems : (<ReactCSSTransitionGroup transitionName="productTransition">{productItems}</ReactCSSTransitionGroup>);
        return (
            <div id="northDOM" className="ui-layout-north ">
                <div id="centerOwlContainer" className={productWrapperClass}>
                    {productItemView}
                </div>
                <div id="basicProductInfoContainer" className={editModeDisabledClass}>
                    <ProductBasicInfoForm selectedProduct={selectedProduct}
                                          productWorkFlowStatus={productWorkFlowStatus} productTypes={productTypes}
                                          productClasses={productClasses}/>
                </div>
            </div>
        );
    }
});