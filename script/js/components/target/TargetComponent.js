var Target = React.createClass({

    propTypes: {
        className: React.PropTypes.string
    },

    render: function () {
        return (
            <div id="targetScreen" className={this.props.className}>
                <div id="topToolsPanel">Target</div>
                <div id="targetScreenContainer">No Target created</div>
            </div>
        );
    }
});