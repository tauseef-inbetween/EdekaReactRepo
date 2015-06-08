var React = require('react');

var CampaignScreenController = React.createClass({

    //Required Props
    propTypes: {
        className: React.PropTypes.string
    },

    render: function () {
        return (
            <div id="campaignScreen" className={this.props.className}>
                <div id="topToolsPanel">Campaign</div>
                <div id="campaignScreenContainer">No Campaigns Found</div>
            </div>
        );
    }
});

module.exports = CampaignScreenController;