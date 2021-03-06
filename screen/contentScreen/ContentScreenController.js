var ContentScreenController = React.createClass({

    //@required: Props
    propTypes: {
        className: React.PropTypes.string,
        store: React.PropTypes.object
    },

    getInitialState: function () {
        return {
            appData: {},
            componentProps: {}
        };
    },

    //@set: state
    contentStateChanged: function () {
        this.setState({
            appData: this.props.store.getData().appData,
            componentProps: this.props.store.getData().componentProps
        });
    },

    componentWillMount: function () {
        this.contentStateChanged();
    },

    //@Bind: Store with state
    componentDidMount: function () {
        this.props.store.bind('change', this.contentStateChanged);
    },

    //@UnBind: store with state
    componentWillUnmount: function () {
        this.props.store.unbind('change', this.contentStateChanged);
    },


    render: function () {

        var productWorkFlowStatus = this.state.appData.getProductWorkflowStatus();
        var productTypes = this.state.appData.getProductTypes();
        var productClasses = this.state.appData.getProductClasses();
        var productList = this.state.appData.getAllProducts();

        var contentViewStyle = this.state.componentProps.getContentViewStyle();
        var contentViewMode = this.state.componentProps.getContentViewMode();
        var carouselPosition = this.state.componentProps.getCarouselPosition();
        var selectedProps = this.state.componentProps.getSelectedProps();

        //@return: actual component content
        return (
            <div id="contentScreen" className={this.props.className}>
                <ContentActionBarView contentViewStyle={contentViewStyle}
                                  contentViewMode={contentViewMode}/>

                <ContentInfoScreenView productList={productList}
                                   selectedProps={selectedProps}
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
