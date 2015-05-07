var ContentScreenController = React.createClass({

    //@required: Props
    propTypes: {
        className: React.PropTypes.string
    },

    getInitialState: function () {
        return {
            //App Data
            productList: [],
            productTypes: [],
            productClasses: [],
            productWorkFlowStatus: [],

            //Component Data
            contentViewStyle: 'thumbnail',
            contentViewMode: 'viewMode',
            selectedProps: null,
            carouselLeftPosition: 0
        };
    },

    //@set: state
    listStateChanged: function () {
        var data = ContentListStore.getData();
        this.setState({
            productList: data.getAppData().getAllProducts(),
            productTypes: data.getAppData().getProductTypes(),
            productClasses: data.getAppData().getProductClasses(),
            productWorkFlowStatus: data.getAppData().getProductWorkflowStatus(),

            contentViewStyle: data.getComponentProps().getContentViewStyle(),
            contentViewMode: data.getComponentProps().getContentViewMode(),
            selectedProps: data.getComponentProps().getSelectedProps(),
            carouselPosition: data.getComponentProps().getCarouselPosition()
        });
    },

    componentWillMount: function () {
        this.listStateChanged();
    },

    //@Bind: Store with state
    componentDidMount: function () {
        ContentListStore.bind('change', this.listStateChanged);
    },

    //@UnBind: store with state
    componentWillUnmount: function () {
        ContentListStore.unbind('change', this.listStateChanged);
    },


    render: function () {

        var contentViewStyle = this.state.contentViewStyle;
        var contentViewMode = this.state.contentViewMode;
        var productWorkFlowStatus = this.state.productWorkFlowStatus;
        var productTypes = this.state.productTypes;
        var productClasses = this.state.productClasses;
        var carouselPosition = this.state.carouselPosition;

        //@return: actual component content
        return (
            <div id="contentScreen" className={this.props.className}>
                <ContentActionBar contentViewStyle={this.state.contentViewStyle}
                                  contentViewMode={this.state.contentViewMode}/>

                <ContentInfoScreen productList={this.state.productList}
                                   selectedProps={this.state.selectedProps}
                                   productWorkFlowStatus={productWorkFlowStatus}
                                   productTypes={productTypes}
                                   productClasses={productClasses}
                                   contentViewMode={contentViewMode}
                                   contentViewStyle={contentViewStyle}
                                   carouselPosition={carouselPosition}/>
            </div>
        )
    }
});

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
