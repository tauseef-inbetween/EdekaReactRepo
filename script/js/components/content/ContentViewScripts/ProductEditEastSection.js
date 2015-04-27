var ProductEditEastContent = React.createClass({

    propTypes: {
        contentViewMode: React.PropTypes.string.isRequired
    },

    render : function () {
        var editModeDisabledClass = (this.props.contentViewMode == 'editMode') ? '' : 'productViewMode';
        return (
            <div id="eastDOM" className={"ui-layout-east " + editModeDisabledClass }>
            </div>
        );
    }
});