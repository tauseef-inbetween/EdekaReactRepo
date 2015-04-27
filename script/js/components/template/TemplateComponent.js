var Template = React.createClass({

    propTypes: {
        className: React.PropTypes.string
    },

    render: function () {
        return (
            <div id="templateScreen" className={this.props.className}>
                <div id="topToolsPanel">Template</div>
                <div id="templateScreenContainer">Currently no Template</div>
            </div>
        );
    }
});