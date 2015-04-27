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
            productClasses: [],
            selectedIndex: 0
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
            productClasses: ContentListStore.getProductClasses(),
            selectedIndex: ContentListStore.getSelectedIndex()
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
        return (
            <div id="contentScreen" className={this.props.className}>
                <ContentViewStyle contentViewStyle={this.state.contentViewStyle}
                                  contentViewMode={this.state.contentViewMode}/>
                <div id="ProductInfoScreen" >
                    <ProductInfoScreen {...this.state}/>
                </div>
            </div>
        )
    }
});