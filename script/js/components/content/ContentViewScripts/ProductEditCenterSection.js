var ProductEditCenterContent = React.createClass({

    propTypes: {
        selectedProduct: React.PropTypes.object,
        contentViewMode: React.PropTypes.string.isRequired
    },

    render : function () {
        var product = this.props.selectedProduct;
        var data = 'No Product Selected';
        var editModeDisabledClass = (this.props.contentViewMode == 'editMode') ? '' : 'productViewMode';
        if(product != null) {
            data = product.label;
        }
        return (
            <div id="centerDOM" className={"ui-layout-center " + editModeDisabledClass}>
                {data}
            </div>
        );
    }
});