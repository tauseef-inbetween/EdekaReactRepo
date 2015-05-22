var React = require('react');
var AssortmentScreenController = React.createClass({
    propTypes: {
        className: React.PropTypes.string
    },

    render: function () {
        return (
            <div id="assortmentScreen" className={this.props.className}>
                <div id="topToolsPanel">Assortment</div>
                <div id="assortmentScreenContainer">
                    No assortment created yet
                </div>
            </div>
        );
    }
});

module.exports = AssortmentScreenController;