var _ = require('lodash');
var React = require('react');
var Sly = require('./Sly');

var ContentImageCarouselView = React.createClass({

    //@require: Props
    propTypes: {
        selectedProps: React.PropTypes.object,
        contentViewMode: React.PropTypes.string.isRequired
    },

    getSelectedProductImages: function () {
        return _.map(this.props.selectedProps.selectedProduct.image, function (imageSRC, i){
            //@return: each image
            return (
                <div className="contentImageWrapper" key={"item" + i}>
                    <img className="contentImage" src={imageSRC}/>
                </div>
            );
        });
    },

    render : function () {

        //@decide: class to show/hide image carousel based on the view mode
        var editModeDisabledClass = (this.props.contentViewMode == 'editMode') ? '' : 'productViewMode';

        var items = [];
        if(this.props.selectedProps.selectedProduct) {
            //@assigns @store: all images of selected product to variable {items}
            items = this.getSelectedProductImages();
        }

        //@return: actual component content
        return (
            <div id="centerDOM" className={"ui-layout-center " + editModeDisabledClass}>
                <Sly selectedProduct={this.props.selectedProduct} items={items}/>
            </div>
        );
    }
});

module.exports = ContentImageCarouselView;