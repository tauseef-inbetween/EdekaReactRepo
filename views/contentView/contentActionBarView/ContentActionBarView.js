var React = require('react');
var EventBus = require('../../../libraries/js/flux/EventDispatcher.js');

var ContentActionBarView = React.createClass({

    //Required props
    propTypes: {
        contentViewStyle: React.PropTypes.oneOf(['thumbnail', 'detailView']),
        contentViewMode: React.PropTypes.oneOf(['editMode', 'viewMode'])
    },

    eventList: {
        view_change_event: "Event to change the view style",
        save_product_event: "Save Button clicked",
        back_view_mode_event: "Back Button clicked to go to Basic View"
    },

    handleViewButtonClicked: function (event) {
        EventBus.dispatch("view_change_event", this, event);
    },

    saveProductInfo: function (event) {
        EventBus.dispatch("save_product_event", this, event);
    },

    backToViewMode: function (event) {
        EventBus.dispatch("back_view_mode_event", this, event);
    },

    render: function () {

        var thumbnailClass = "pimViewChangeButton glyphicon glyphicon-picture ";
        var detailClass = "pimViewChangeButton glyphicon glyphicon-align-justify ";

        //Class to mark selected thumbnail/detailView
        this.props.contentViewStyle == 'thumbnail' ? thumbnailClass += 'selectedButton' : detailClass += 'selectedButton';

        //Class to hide/show back and save buttons on action bar
        var modeClass = (this.props.contentViewMode == 'editMode' ? 'showContentEditController' : 'hideContentEditController');

        return (
            <div id="topToolsPanel">
                <div id="contentViewContainer">
                    <div id="pimViewThumbnail" title="Thumbnail View" className={thumbnailClass}
                         onClick={this.handleViewButtonClicked}></div>
                    <div id="pimViewDetail" title="Detail View" className={detailClass}
                         onClick={this.handleViewButtonClicked}></div>
                </div>

                <span>Content</span>

                <div id="contentEditController" className={modeClass}>
                    <button id="productSaveButton" className="saveContent btn btn-primary" tabIndex="-1" onClick={this.saveProductInfo}>Save</button>
                    <div id="backToPimThumbsButton" title="Back" onClick={this.backToViewMode}></div>
                </div>
            </div>
        );
    }
});

module.exports = ContentActionBarView;
