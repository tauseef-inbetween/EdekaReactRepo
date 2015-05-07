var NoteList = React.createClass({

    //@require: Props
    propTypes: {
        productClasses: React.PropTypes.array,
        selectedProduct: React.PropTypes.object,
        selectedNote: React.PropTypes.number
    },

    //@returns: class of Product {standard, product, recipe}
    getClassGroup: function () {
        var classes = this.props.productClasses;
        for (var productClass in classes) {
            if (classes[productClass].label == this.props.selectedProduct.class) {
                return classes[productClass];
            }
        }
        return null;
    },

    //@show: popover on click of add note button
    showPopOver: function () {
        this.refs.myPopover.show();
    },

    //@hide: popover onclick of outside add button
    hidePopOver: function (event) {
        if (!$(event.target).hasClass('productClassGroup')) {
            this.refs.myPopover.hide();
        }
    },

    //@handle: note click to add selected class
    handleNoteClick: function (index, event) {
        var targetClass = event.target.className;
        if (targetClass == 'textArea' || targetClass == 'selectNote' || targetClass == 'textBox' || targetClass == 'jDeletePimNotes') {
            return
        }
        setSelectedNote(index);
    },

    //@handle: item click on PopOver element to add note
    handleItemClick: function (item, event) {
        this.hidePopOver(event);
        addNoteToSelectedContent(item);
    },

    //@handle: to scroll to top of note list
    scrollToTop: function () {
        var node = this.getDOMNode();
        node.scrollTop = 0;
    },

    //@Bind: click of body with hide Popover
    componentDidMount: function () {
        $('body').bind('click', this.hidePopOver);
    },

    //@decide @hide: popover and decide to scroll to bottom or not
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

    //@decide: to scroll to bottom or not
    componentWillUpdate: function () {
        var node = this.refs.noteContainer.getDOMNode();
        this.shouldScrollBottom = (node.scrollTop && (node.scrollTop + node.offsetHeight) === node.scrollHeight);
    },

    render: function () {

        //@Bootstrap: React component
        var OverlayTrigger = ReactBootstrap.OverlayTrigger;
        var Button = ReactBootstrap.Button;
        var Popover = ReactBootstrap.Popover;
        var Glyphicon = ReactBootstrap.Glyphicon;

        var that = this;
        var productNotes = that.props.selectedProduct.notes;
        var classGroup = this.getClassGroup();

        //@assign @add: items from class Group [standard, recipe, product] to PopOver
        if (classGroup) {
            var classContents = _.map(classGroup.groups, function (item, i) {
                //@bind: popover item click with item data
                var addNote = that.handleItemClick.bind(that, item);
                return (<div className="productClassGroup" key={"item" + i} onClick={addNote}>{item.label}</div>);
            });
            var popOver = (<Popover>{classContents}</Popover>)
        }

        //@assign: product notes to variable {noteItems}
        var noteItems = _.map(productNotes, function (item, i) {
            //@bind: delete button click with item
            var deleteNote = deleteNoteFromSelectedProduct.bind(that, item);
            //@bind: note click with index
            var noteClick = that.handleNoteClick.bind(that, i);
            //@decide: active note with respect to index
            var noteClass = "noteContainer " + ((that.props.selectedNote == i) ? ' activeNote' : '');
            //@return: each row of note and assign to variable {noteItems}
            return (<div className={noteClass} key={"item" + i} onClick={noteClick}>
                <button className="jDeletePimNotes" onClick={deleteNote}></button>
                <table className="table table-bordered table-condensed" style={{margin: 0 + " auto"}}>
                    <NoteRow item={item} selectedProductClass={that.props.selectedProduct.class}
                                     productClasses={that.props.productClasses}/>
                </table>
            </div>);
        });

        //@return: actual Component content
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