var ProductEditWestContent = React.createClass({
    render : function () {
        var editModeDisabledClass = (this.props.contentViewMode == 'editMode') ? '' : 'productViewMode';
        return (
            <div id="westDOM" className={"ui-layout-west " + editModeDisabledClass}>

            </div>
        );
    }
});