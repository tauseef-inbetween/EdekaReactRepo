var ProductEditCenterContent = React.createClass({
    render : function () {
        var product = this.props.selectedProduct;
        var data = 'No Product Selected';
        if(product != null) {
            data = product.label;
        }
        return (
            <div id="centerDOM" className="ui-layout-center">
                {data}
            </div>
        );
    }
});