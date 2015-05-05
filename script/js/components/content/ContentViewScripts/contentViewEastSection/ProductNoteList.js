var uniquePopoverStore = {};
var uniqueKey = 1;

var ProductNoteList = React.createClass({

    propTypes: {
        productClasses: React.PropTypes.array,
        selectedProduct: React.PropTypes.object,
        selectedNote: React.PropTypes.number
    },

    getInitialState: function () {
        return {
            selectedNote: -1,
            selectedProductId: -1
        }
    },

    getClassGroup: function () {
        var classes = this.props.productClasses;
        for (var productClass in classes) {
            if (classes[productClass].label == this.props.selectedProduct.class) {
                return classes[productClass];
            }
        }
        return null;
    },

    showPopOver: function () {
        this.refs.myPopover.show();
    },

    hidePopOver: function (event) {
        if (!$(event.target).hasClass('productClassGroup')) {
            this.refs.myPopover.hide();
        }
    },

    handleNoteClick: function (index, event) {

        var targetClass = event.target.className;
        if (targetClass == 'textArea' || targetClass == 'selectNote' || targetClass == 'textBox' || targetClass == 'jDeletePimNotes') {
            return
        }

        this.setState({selectedProductId: this.props.selectedProduct.id, selectedNote: index});
    },

    handleItemClick: function (item, event) {
        this.hidePopOver(event);
        addNoteToSelectedContent(item);
    },

    scrollToTop: function () {
        var node = this.getDOMNode();
        node.scrollTop = 0;
    },

    componentDidMount: function () {
        $('body').bind('click', this.hidePopOver);
    },

    componentDidUpdate: function () {
        this.refs.myPopover.hide();

        if (!this.shouldScrollBottom) {
            this.refs.goToTop.getDOMNode().style.opacity = 0;
        } else {
            this.refs.goToTop.getDOMNode().style.opacity = 0.8;
        }

        if (this.shouldScrollBottom) {
            var node = this.refs.noteContainer.getDOMNode();
            node.scrollTop = node.scrollHeight;
        }
    },

    componentWillUpdate: function () {
        var node = this.refs.noteContainer.getDOMNode();
        this.shouldScrollBottom = (node.scrollTop && (node.scrollTop + node.offsetHeight) === node.scrollHeight);
    },

    render: function () {

        var OverlayTrigger = ReactBootstrap.OverlayTrigger;
        var Button = ReactBootstrap.Button;
        var Popover = ReactBootstrap.Popover;
        var Glyphicon = ReactBootstrap.Glyphicon;
        var that = this;
        var productNotes = that.props.selectedProduct.notes;

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
            var noteClick = that.handleNoteClick.bind(that, i);
            var noteClass = "noteContainer " + ((that.state.selectedNote == i && that.state.selectedProductId == that.props.selectedProduct.id) ? ' activeNote' : '');

            return (<div className={noteClass} key={"item" + i} onClick={noteClick}>
                <button className="jDeletePimNotes" onClick={deleteNote}></button>
                <table className="table table-bordered table-condensed" style={{margin: 0 + " auto"}}>
                    <ProductNoteRows item={item} selectedProductClass={that.props.selectedProduct.class}
                                     productClasses={that.props.productClasses}/>
                </table>
            </div>);
        });

        return (
            <div id="noteContentDiv" ref="noteContainer">
                {noteItems}
                <div className="noteControls">
                    <OverlayTrigger
                        trigger='manual'
                        placement='right'
                        ref='myPopover'
                        overlay={popOver}>
                        <Button onClick={this.showPopOver} className="btnAddNote" bsSize='xsmall'
                                bsStyle='primary'><Glyphicon glyph='plus-sign'/> Add</Button>
                    </OverlayTrigger>

                    <div id="productNoteScrollTop" ref="goToTop" onClick={this.scrollToTop} title="Move to Top">
                        <Glyphicon glyph='circle-arrow-up'/></div>
                </div>
            </div>
        );
    }
});