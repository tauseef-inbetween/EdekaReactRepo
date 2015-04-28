var ProductNoteList = React.createClass({

    propTypes: {
        selectedProductClass: React.PropTypes.string.isRequired,
        selectedProductNotes: React.PropTypes.array.isRequired,
        productClasses: React.PropTypes.array
    },

    getClassGroup: function () {
        var classes = this.props.productClasses;
        for(var productClass in classes) {
            if(classes[productClass].label == this.props.selectedProductClass) {
                return classes[productClass];
            }
        }
        return null;
    },

    render: function () {

        var OverlayTrigger = ReactBootstrap.OverlayTrigger;
        var Button = ReactBootstrap.Button;
        var Popover = ReactBootstrap.Popover;
        var Glyphicon = ReactBootstrap.Glyphicon;

        var productNotes = this.props.selectedProductNotes;
        var productClass = this.props.selectedProductClass;

        var classGroup = this.getClassGroup();
        if(classGroup) {
            var classContents = _.map(classGroup.groups, function (item, i) {
                return (<div className="productClassGroup">{item.label}</div>);
            });
            var popOver = (<Popover>{classContents}</Popover>)
        }

        function getRows(item, i){
            return (
                <tr key={"item" + i}>
                    <td>
                        <div className="productClassAttributeText">{item.label}:</div>
                        {item.type == "Description"
                            ? <textarea rows="4" cols="25" value={item.value} className="textArea"></textarea>
                            : <input type="text" value={item.value} className="textBox"/>
                        }
                    </td>
                </tr>
            );
        }

        var noteItems = _.map(productNotes, function (item, i) {
            return(<div className="noteContainer" key={"item" + i}>
                <button className="jDeletePimNotes"></button>
                <table className="table table-bordered table-condensed" style={{margin: 0 + " auto"}}>
                    <tbody>
                        {_.map(item.values, getRows)}
                    </tbody>
                </table>
            </div>);
        });

        return (
            <div id="noteContentDiv">
                {noteItems}
                <OverlayTrigger
                    trigger='focus'
                    placement='right'
                    overlay={popOver}>
                        <Button className="btnAddNote" bsSize='xsmall' bsStyle='primary'><Glyphicon glyph='plus-sign' /> Add</Button>
                </OverlayTrigger>
            </div>
        );
    }
});