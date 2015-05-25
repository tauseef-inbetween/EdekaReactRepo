var React = require('react');

var TargetScreenController = React.createClass({

    //Required Props
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

module.exports = TargetScreenController;