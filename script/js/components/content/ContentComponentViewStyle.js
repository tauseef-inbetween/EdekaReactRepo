ContentViewStyle = React.createClass({
    getInitialState: function () {
        return {
            contentViewStyle: ''
        }
    },
    listStateChanged: function () {
        this.setState({contentViewStyle: ContentListStore.getContentViewStyle()});
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
        var thumbnailClass = "pimViewChangeButton glyphicon glyphicon-picture ";
        var detailClass = "pimViewChangeButton glyphicon glyphicon-align-justify ";
        this.state.contentViewStyle == 'thumbnail' ? thumbnailClass += 'selectedButton' : detailClass += 'selectedButton';
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
