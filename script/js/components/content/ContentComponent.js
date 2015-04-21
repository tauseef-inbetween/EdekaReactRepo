var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var Content = React.createClass({
    getInitialState: function () {
        return {
            productList: [],
            contentViewStyle: 'thumbnail',
            contentViewMode: 'viewMode',
            selectedProduct: null,

            productWorkFlowStatus: [],
            productTypes: [],
            productClasses: []
        };
    },

    listStateChanged: function () {
        this.setState({
            productList: ContentListStore.getAllData(),
            contentViewStyle: ContentListStore.getContentViewStyle(),
            contentViewMode: ContentListStore.getContentViewMode(),
            selectedProduct: ContentListStore.getSelectedProduct(),
            productWorkFlowStatus: ContentListStore.getProductWorkflowStatus(),
            productTypes: ContentListStore.getProductTypes(),
            productClasses: ContentListStore.getProductClasses()
        });
    },

    componentWillMount: function () {
        this.listStateChanged();
    },

    componentDidMount: function () {
        ContentListStore.bind('change', this.listStateChanged);
    },

    componentWillUnmount: function () {
        ContentListStore.unbind('change', this.listStateChanged);
    },


    render: function () {
        var contentViewStyle = this.state.contentViewStyle;
        var contentViewMode = this.state.contentViewMode;
        var productWrapperClass = (contentViewMode == 'viewMode') ? 'currentProductScreen' : 'hiddenProductScreen';
        var productInfoScreenClass = (contentViewMode == 'editMode') ? 'currentProductScreen' : 'hiddenProductScreen';

        var productWorkFlowStatus = this.state.productWorkFlowStatus;
        var productTypes = this.state.productTypes;
        var productClasses = this.state.productClasses;

        var productItems = _.map(this.state.productList, function (item) {
            var productDeleteBtnClickBind = deleteProductButtonClicked.bind(this, item.id);
            var productThumbnailBtnClicked = productThumbClicked.bind(this, item.id);

            if (contentViewStyle == 'thumbnail') {
                return (
                    <ProductThumbnailViewItem key={item.id} product={item} onProductClick={productThumbnailBtnClicked}
                                              onDeleteClick={productDeleteBtnClickBind}/>
                );
            } else {
                return (
                    <ProductDetailViewItem key={item.id} product={item} onProductClick={productThumbnailBtnClicked}
                                           onDeleteClick={productDeleteBtnClickBind}/>
                );
            }
        });
        return (
            <div id="contentScreen" className={this.props.className}>

                <ContentViewStyle contentViewStyle={this.state.contentViewStyle}
                                  contentViewMode={this.state.contentViewMode}/>

                <div id="ProductWrapper" className={productWrapperClass}>
                    <ReactCSSTransitionGroup transitionName="productTransition">
                        {productItems}
                    </ReactCSSTransitionGroup>
                </div>

                <div id="ProductInfoScreen" className={productInfoScreenClass}>
                    <ProductEditInfoScreen productList={this.state.productList}
                                           selectedProduct={this.state.selectedProduct}
                                           productWorkFlowStatus={productWorkFlowStatus}
                                           productTypes={productTypes}
                                           productClasses={productClasses}
                                           productItems={productItems}/>
                </div>
            </div>
        )
    }
});