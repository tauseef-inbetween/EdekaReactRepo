var React = require('react');
var _ = require('underscore');
var ContentThumbnail = require('./ContentThumbnail');
var ContentBasicInfoFormView = require('../contentBasicInfoFormView/ContentBasicInfoFormView');
var Carousel = require('./carousel/Carousel');
var ReactAddons = require('react/addons');
var ReactCSSTransitionGroup = ReactAddons.addons.CSSTransitionGroup;
var ContentAction = require('../../../screen/contentScreen/ContentAction');

var ThumbnailView = React.createClass({

    //Required props
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

    getProductItems: function (productList) {
        var that = this;
        var contentViewStyle = that.props.contentViewStyle;
        return _.map(productList, function (item, i) {
            //Binding delete button of thumb with contentId
            var productDeleteBtnClickBind = ContentAction.deleteProductButtonClicked.bind(that, item.id);

            //Binding thumb click with contentId
            var productThumbnailBtnClicked = ContentAction.productThumbClicked.bind(that, item.id, i);

            //Returns thumbnail of single content and stores in productItems variable
            return (
                <ContentThumbnail key={item.id}
                                  product={item}
                                  ref={'item' + i}
                                  onProductClick={productThumbnailBtnClicked}
                                  onDeleteClick={productDeleteBtnClickBind}
                                  contentViewStyle={contentViewStyle}/>
            );
        });
    },

    render: function () {
        var selectedProps = this.props.selectedProps;
        var productWorkFlowStatus = this.props.productWorkFlowStatus;
        var productTypes = this.props.productTypes;
        var productClasses = this.props.productClasses;
        var productWrapperClass = (this.props.contentViewMode == 'editMode') ? 'owl-carousel' : 'ProductWrapper';
        var editModeDisabledClass = (this.props.contentViewMode == 'editMode') ? '' : 'productViewMode';
        var carouselPosition = this.props.carouselPosition;
        var selectedProduct = selectedProps.selectedProduct;
        var that = this;

        //#LogicFlow #DataCreation
        //@get: product thumbs and assigning in {productItems} variable
        var productItems = this.getProductItems(that.props.productList);

        //@decide: to show thumbnails in carousel or simple view mode
        var productItemView = (this.props.contentViewMode == 'editMode') ?
            <Carousel items={productItems} selectedIndex={selectedProps.selectedIndex} key="carousel" ref="owlCarousel"
                      carouselPosition={carouselPosition}/> : (
            <ReactCSSTransitionGroup transitionName="productTransition">{productItems}</ReactCSSTransitionGroup>);

        return (
            <div id="northDOM" className="ui-layout-north">
                <div id="centerOwlContainer" className={productWrapperClass} ref="owlContainer">
                    {productItemView}
                </div>
                <div id="basicProductInfoContainer" className={editModeDisabledClass}>
                    <ContentBasicInfoFormView selectedProduct={selectedProduct}
                                          productWorkFlowStatus={productWorkFlowStatus}
                                          productTypes={productTypes}
                                          productClasses={productClasses}/>
                </div>
            </div>
        );
    }
});

module.exports  =ThumbnailView;