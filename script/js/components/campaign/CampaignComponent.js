Campaign = React.createClass ({
  render: function () {
    return (
      <div id="campaignScreen" className={this.props.className}>
        <div id="topToolsPanel">Campaign</div>
        <div id="campaignScreenContainer">No Campaigns Found</div>
      </div>
    );
  }
});