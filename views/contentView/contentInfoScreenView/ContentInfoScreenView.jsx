var React = require('react');
var ThumbnailView = require('../thumbnailView/ThumbnailView');
var ContentImageCarouselView = require('../contentImageCarouselView/ContentImageCarouselView');
var ContentNoteView = require('../contentNoteView/ContentNoteView');
var ContentTagView = require('../contentTagView/ContentTagView');
var ContentAction = require('../../../screen/contentScreen/ContentAction.js');

var ContentInfoScreenView = React.createClass({

    //@required: props
    propTypes: {
        productList: React.PropTypes.arrayOf(React.PropTypes.object),
        selectedProps: React.PropTypes.object,
        productWorkFlowStatus: React.PropTypes.array.isRequired,
        productTypes: React.PropTypes.array.isRequired,
        productClasses: React.PropTypes.array.isRequired,
        contentViewStyle: React.PropTypes.oneOf(['thumbnail', 'detailView']),
        contentViewMode: React.PropTypes.oneOf(['editMode', 'viewMode']),
        carouselPosition: React.PropTypes.object
    },

    componentDidUpdate: function () {
        //#LogicFlow Check
        //@Initiate: jQuery Layout on based of mode
        if (this.props.contentViewMode == 'editMode') {
            ContentAction.initialiseLayouts(this.props.selectedProps.selectedProduct.type);
        }
    },

    render: function () {
        var productList = this.props.productList;
        var selectedProps = this.props.selectedProps;
        var productWorkFlowStatus = this.props.productWorkFlowStatus;
        var productTypes = this.props.productTypes;
        var productClasses = this.props.productClasses;
        var contentViewMode = this.props.contentViewMode;
        var contentViewStyle = this.props.contentViewStyle;
        var carouselPosition = this.props.carouselPosition;

        return (
            <div id="ProductEditInfoScreen" ref="ProductEditInfoScreen">

                <div id="centerDOMMainContainer">

                    <ThumbnailView
                        productList={productList}
                        selectedProps={selectedProps}
                        productWorkFlowStatus={productWorkFlowStatus}
                        productTypes={productTypes}
                        productClasses={productClasses}
                        ref="northDOM" key="2"
                        contentViewMode={contentViewMode}
                        contentViewStyle={contentViewStyle}
                        carouselPosition={carouselPosition}/>

                    <ContentImageCarouselView
                        contentViewMode={contentViewMode}
                        selectedProps={selectedProps}
                        ref="centerDOM"
                        key="1"/>

                    <ContentNoteView
                        contentViewMode={contentViewMode}
                        productClasses={productClasses}
                        selectedProps={selectedProps}
                        ref="eastDOM"
                        key="4"/>

                </div>

                <ContentTagView
                    contentViewMode={contentViewMode} selectedProps={selectedProps} ref="westDOM" key="5"/>
            </div>
        );
    }
});

module.exports = ContentInfoScreenView;