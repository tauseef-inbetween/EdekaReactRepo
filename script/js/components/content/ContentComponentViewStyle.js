var ContentViewStyle = React.createClass({
    render: function () {
        var thumbnailClass = "pimViewChangeButton glyphicon glyphicon-picture ";
        var detailClass = "pimViewChangeButton glyphicon glyphicon-align-justify ";
        this.props.contentViewStyle == 'thumbnail' ? thumbnailClass += 'selectedButton' : detailClass += 'selectedButton';
        var modeClass = (this.props.contentViewMode == 'editMode' ? 'showContentEditController' : 'hideContentEditController');
        return (
            <div id="topToolsPanel">
                <div id="contentViewContainer">
                    <div id="pimViewThumbnail" title="Thumbnail View" className={thumbnailClass}
                         onClick={handleViewButtonClicked}></div>
                    <div id="pimViewDetail" title="Detail View" className={detailClass}
                         onClick={handleViewButtonClicked}></div>
                </div>
                Content
                <div id="contentEditController" className={modeClass}>
                    <button id="productSaveButton" className="saveContent btn btn-primary" tabIndex="-1" onClick={saveProductInfo}>Save</button>
                    <div id="backToPimThumbsButton" title="Back" onClick={backToViewMode}></div>
                </div>
            </div>
        );
    }
});
