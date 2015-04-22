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
        var productWorkFlowStatus = this.state.productWorkFlowStatus;
        var productTypes = this.state.productTypes;
        var productClasses = this.state.productClasses;

        return (
            <div id="contentScreen" className={this.props.className}>
                <ContentViewStyle contentViewStyle={this.state.contentViewStyle}
                                  contentViewMode={this.state.contentViewMode}/>
                <div id="ProductInfoScreen" >
                    <ProductInfoScreen productList={this.state.productList}
                                           selectedProduct={this.state.selectedProduct}
                                           productWorkFlowStatus={productWorkFlowStatus}
                                           productTypes={productTypes}
                                           productClasses={productClasses}
                                           contentViewMode={contentViewMode}
                                           contentViewStyle={contentViewStyle}/>
                </div>
            </div>
        )
    }
});