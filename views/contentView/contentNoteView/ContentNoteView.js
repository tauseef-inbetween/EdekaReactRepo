var ContentNoteView = React.createClass({

    //@require: Props
    propTypes: {
        contentViewMode: React.PropTypes.string.isRequired,
        selectedProps: React.PropTypes.object,
        productClasses: React.PropTypes.array
    },

    render : function () {
        //@Bootstrap: React Component
        var Button = ReactBootstrap.Button;

        var selectedNoteIndex = this.props.selectedProps.selectedNoteIndex;
        var selectedProduct = this.props.selectedProps.selectedProduct;
        if(!selectedProduct) {
            selectedProduct = {};
            selectedProduct.class = '';
            selectedProduct.notes = [];
        }

        var productClasses = this.props.productClasses;
        var editModeDisabledClass = (this.props.contentViewMode == 'editMode') ? '' : 'productViewMode';

        return (
            <div id="eastDOM" className={"ui-layout-east " + editModeDisabledClass }>
                <div id="pimScreenBasicRightHeader">
                    <span>Text</span>
                    <Button className="btnSetDefault" bsSize='xsmall' bsStyle='primary'>Set As Default</Button>
                </div>
                <NoteList
                    productClasses={productClasses}
                    selectedProduct={selectedProduct}
                    selectedNote={selectedNoteIndex}/>

            </div>
        );
    }
});