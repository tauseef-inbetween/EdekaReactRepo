var Promotion = React.createClass({

    propTypes: {
        className: React.PropTypes.string
    },

    render: function () {
        return (
            <div id="promotionScreen" className={this.props.className}>
                <div id="topToolsPanel">Promotion</div>
                <div is="promotionScreenContainer">No Promotion Found</div>
            </div>
        );
    }
});