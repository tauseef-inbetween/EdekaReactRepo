var CalendarScreenController = React.createClass({

    //Required props
    propTypes: {
        className: React.PropTypes.string
    },

    render: function () {
        return (
            <div id="calenderScreen" className={this.props.className}>
                <div id="topToolsPanel">Calender</div>
                <div id="calenderScreenContainer">No promotion or campaign created yet</div>
            </div>
        );
    }
});