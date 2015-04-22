var ProductEditNorthContent = React.createClass({
    componentDidUpdate: function () {
        /*var $container = $('#centerOwlContainer');
        if($container.data('owlCarousel')) {
            $container.data('owlCarousel').reinit();
        } else {
            $container.owlCarousel({
                items: 6,
                lazyLoad: true,
                scrollPerPage: true,
                pagination: false,
                navigation: true
            });
        }*/
    },
    render: function () {
        var selectedProduct = this.props.selectedProduct;
        var productWorkFlowStatus = this.props.productWorkFlowStatus;
        var productTypes = this.props.productTypes;
        var productClasses = this.props.productClasses;
        var productItems = this.props.productItems;
        return (
            <div id="northDOM" className="ui-layout-north">
                <div id="centerOwlContainer" className="owl-carousel">
                        {productItems}
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