var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var Content = React.createClass({

    propTypes: {
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
            selectedProps: null,
            carouselLeftPosition: 0
            //isSaved: true
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
            selectedProps: data.getComponentProps().getSelectedProps(),
            carouselPosition: data.getComponentProps().getCarouselPosition()
            //isSaved: data.getComponentProps().getIsSaved()
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
        var carouselPosition = this.state.carouselPosition;
        //var isSaved = this.state.isSaved;
        return (
            <div id="contentScreen" className={this.props.className}>
                <ContentActionBar contentViewStyle={this.state.contentViewStyle}
                                  contentViewMode={this.state.contentViewMode}/>

                <div id="ProductInfoScreen">
                    <ProductInfoScreen productList={this.state.productList}
                                       selectedProps={this.state.selectedProps}
                                       productWorkFlowStatus={productWorkFlowStatus}
                                       productTypes={productTypes}
                                       productClasses={productClasses}
                                       contentViewMode={contentViewMode}
                                       contentViewStyle={contentViewStyle}
                                       carouselPosition={carouselPosition}/>
                </div>
            </div>
        )
    }
});