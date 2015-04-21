var ContentViewStyle = React.createClass({
    render: function () {
        var thumbnailClass = "pimViewChangeButton glyphicon glyphicon-picture ";
        var detailClass = "pimViewChangeButton glyphicon glyphicon-align-justify ";
        this.props.contentViewStyle == 'thumbnail' ? thumbnailClass += 'selectedButton' : detailClass += 'selectedButton';
        return (
            <div id="contentViewContainer">
                <div id="pimViewThumbnail" title="Thumbnail View" className={thumbnailClass}
                     onClick={handleViewButtonClicked}></div>
                <div id="pimViewDetail" title="Detail View" className={detailClass}
                     onClick={handleViewButtonClicked}></div>
            </div>
        );
    }
});
