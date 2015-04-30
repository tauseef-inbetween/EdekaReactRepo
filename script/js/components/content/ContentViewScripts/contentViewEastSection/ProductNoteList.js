var uniquePopoverStore = {};
var uniqueKey = 1;

var ProductNoteList = React.createClass({

    propTypes: {
        selectedProductClass: React.PropTypes.string.isRequired,
        selectedProductNotes: React.PropTypes.array.isRequired,
        productClasses: React.PropTypes.array
    },

    getClassGroup: function () {
        var classes = this.props.productClasses;
        for (var productClass in classes) {
            if (classes[productClass].label == this.props.selectedProductClass) {
                return classes[productClass];
            }
        }
        return null;
    },

    componentDidUpdate: function () {
        endTime = new Date().getTime();
        this.refs.myPopover.hide();
        //console.log("Elapsed Time : " + (endTime - startTime));
    },

    showPopOver: function () {
        this.refs.myPopover.show();
    },

    hidePopOver: function (event) {
        if(!$(event.target).hasClass('productClassGroup')) {
            this.refs.myPopover.hide();
        }
    },

    componentDidMount: function() {
        $('body').bind('click',this.hidePopOver);
    },

    handleItemClick: function (item, event) {
        this.hidePopOver(event);
        addNoteToSelectedContent(item);
    },

    render: function () {

        var OverlayTrigger = ReactBootstrap.OverlayTrigger;
        var Button = ReactBootstrap.Button;
        var Popover = ReactBootstrap.Popover;
        var Glyphicon = ReactBootstrap.Glyphicon;
        var that = this;
        var productNotes = that.props.selectedProductNotes;

        var classGroup = this.getClassGroup();
        if (classGroup) {
            var classContents = _.map(classGroup.groups, function (item, i) {
                var addNote = that.handleItemClick.bind(that, item);
                return (<div className="productClassGroup" key={"item" + i} onClick={addNote}>{item.label}</div>);
            });
            var popOver = (<Popover>{classContents}</Popover>)
        }

        var noteItems = _.map(productNotes, function (item, i) {
            var deleteNote = deleteNoteFromSelectedProduct.bind(that, item);
            return (<div className="noteContainer" key={"item" + i}>
                <button className="jDeletePimNotes" onClick={deleteNote}></button>
                <table className="table table-bordered table-condensed" style={{margin: 0 + " auto"}}>
                    <ProductNoteRows item={item}/>
                </table>
            </div>);
        });

        return (
            <div id="noteContentDiv">
                {noteItems}
                <OverlayTrigger
                    trigger='manual'
                    placement='right'
                    ref='myPopover'
                    overlay={popOver}>
                    <Button onClick={this.showPopOver} className="btnAddNote" bsSize='xsmall' bsStyle='primary'><Glyphicon glyph='plus-sign'/> Add</Button>
                </OverlayTrigger>
            </div>
        );
    }
});