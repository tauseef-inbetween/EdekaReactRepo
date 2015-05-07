var ContentActionBar = React.createClass({

    //Required props
    propTypes: {
        contentViewStyle: React.PropTypes.oneOf(['thumbnail', 'detailView']),
        contentViewMode: React.PropTypes.oneOf(['editMode', 'viewMode'])
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
                         onClick={handleViewButtonClicked}></div>
                    <div id="pimViewDetail" title="Detail View" className={detailClass}
                         onClick={handleViewButtonClicked}></div>
                </div>

                <span>Content</span>

                <div id="contentEditController" className={modeClass}>
                    <button id="productSaveButton" className="saveContent btn btn-primary" tabIndex="-1" onClick={saveProductInfo}>Save</button>
                    <div id="backToPimThumbsButton" title="Back" onClick={backToViewMode}></div>
                </div>
            </div>
        );
    }
});
