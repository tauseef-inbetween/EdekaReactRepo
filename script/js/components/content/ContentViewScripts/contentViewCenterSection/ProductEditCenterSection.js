var ProductEditCenterContent = React.createClass({

    propTypes: {
        selectedProps: React.PropTypes.object,
        contentViewMode: React.PropTypes.string.isRequired
    },

    render : function () {
        var editModeDisabledClass = (this.props.contentViewMode == 'editMode') ? '' : 'productViewMode';

        var items = [];
        if(this.props.selectedProps.selectedProduct) {
            items = _.map(this.props.selectedProps.selectedProduct.image, function (imageSRC, i){
                return (
                    <div className="contentImageWrapper" key={"item" + i}>
                        <img className="contentImage" src={imageSRC}/>
                    </div>
                );
            });
        }
        return (
            <div id="centerDOM" className={"ui-layout-center " + editModeDisabledClass}>
                <Sly selectedProduct={this.props.selectedProduct} items={items}/>
            </div>
        );
    }
});

//<Sly selectedProduct={this.props.selectedProduct} items={items}/>