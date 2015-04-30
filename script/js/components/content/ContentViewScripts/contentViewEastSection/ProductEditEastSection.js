var ProductEditEastContent = React.createClass({

    propTypes: {
        contentViewMode: React.PropTypes.string.isRequired,
        selectedProduct: React.PropTypes.object,
        productClasses: React.PropTypes.array
    },

    render : function () {
        var Button = ReactBootstrap.Button;
        var selectedProduct = this.props.selectedProduct;
        if(!selectedProduct) {
            selectedProduct = {};
            selectedProduct.class = '';
            selectedProduct.notes = [];
        }
        var productClasses = this.props.productClasses;
        var selectedProductClass = selectedProduct.class;
        var selectedProductNotes = selectedProduct.notes;
        var editModeDisabledClass = (this.props.contentViewMode == 'editMode') ? '' : 'productViewMode';
        return (
            <div id="eastDOM" className={"ui-layout-east " + editModeDisabledClass }>
                <div id="pimScreenBasicRightHeader">
                    <span>Text</span>
                    <Button className="btnSetDefault" bsSize='xsmall' bsStyle='primary'>Set As Default</Button>
                </div>
                <ProductNoteList
                    selectedProduct={selectedProduct}
                    productClasses={productClasses}
                    selectedProductNotes={selectedProductNotes}
                    selectedProductClass={selectedProductClass}/>

            </div>
        );
    }
});