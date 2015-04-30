var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var Content = React.createClass({

    propTypes:{
        className: React.PropTypes.string
    },

    getInitialState: function () {
        return {
            productList: [],
            productTypes: [],
            productClasses: [],
            productWorkFlowStatus: [],

            contentViewStyle: 'thumbnail',
            contentViewMode: 'viewMode',
            selectedProduct: null,
            selectedIndex: 0
        };
    },

    listStateChanged: function () {
        var data = ContentListStore.getData();
        this.setState({
            productList: data.getAppData().getAllProducts(),
            productTypes: data.getAppData().getProductTypes(),
            productClasses: data.getAppData().getProductClasses(),
            productWorkFlowStatus: data.getAppData().getProductWorkflowStatus(),

            contentViewStyle: data.getComponentProps().getContentViewStyle(),
            contentViewMode: data.getComponentProps().getContentViewMode(),
            selectedProduct: data.getComponentProps().getSelectedProduct(),
            selectedIndex: data.getComponentProps().getSelectedIndex()
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
        var selectedIndex = this.state.selectedIndex;
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
                                           contentViewStyle={contentViewStyle}
                                           selectedIndex={selectedIndex}/>
                </div>
            </div>
        )
    }
});