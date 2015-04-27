var Report = React.createClass({

    propTypes: {
        className: React.PropTypes.string
    },

    render: function () {
        return (
            <div id="reportScreen" className={this.props.className}>
                <div id="topToolsPanel">Report</div>
                <div id="reportScreenContainer">Report not generated</div>
            </div>
        );
    }
});