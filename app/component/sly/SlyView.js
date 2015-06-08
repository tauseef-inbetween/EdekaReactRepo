var React = require('react');
var _ = require('lodash');

//TODO: Still working
var SlyItems = React.createClass({

    //@require: Props
    propTypes: {
        items: React.PropTypes.array
    },

    getInitialState: function  () {
        return {
            selectedIndex: 0
        }
    },

    getWidthOfSingleItem: function () {
        return this.refs.item0.getDOMNode().offsetWidth;
    },

    wheeling: function (event) {
        var newIndex = 0;
        if (event.deltaY == 100) {
            newIndex = (this.state.selectedIndex + 1) % (this.props.items.length);
        } else if (event.deltaY == -100) {
            newIndex = (this.state.selectedIndex == 0) ? (this.props.items.length - 1) : (this.state.selectedIndex - 1);
        }
        this.setState({selectedIndex: newIndex});
    },

    componentDidMount: function () {
        var itemWidth = this.getWidthOfSingleItem();
        var leftValue = itemWidth - (itemWidth *  this.state.selectedIndex);
        this.refs.slyItemWrapper.getDOMNode().setAttribute("style", "transform: translateX(" + leftValue + "px) ;width:" + (itemWidth * this.props.items.length + 1 ) + "px");
    },

    componentDidUpdate: function () {
        var itemWidth = this.getWidthOfSingleItem();
        var leftValue = itemWidth - (itemWidth *  this.state.selectedIndex);
        this.refs.slyItemWrapper.getDOMNode().setAttribute("style", "transform: translateX(" + leftValue + "px) ;width:" + (itemWidth * this.props.items.length + 1 ) + "px");
    },

    getImageItems: function (items) {
        var that = this;
        return _.map(items, function (item, i) {
            var slyClass = "slyItem" + (i == that.state.selectedIndex ? ' active' : '');
            return (
                <div key={"item" + i} ref={"item" + i} className={slyClass}>
                    {item}
                </div>
            );
        });
    },

    render: function () {
        var imageItems = this.getImageItems(this.props.items);
        return (
            <div className="slyItemWrapper" onWheel={this.wheeling} ref="slyItemWrapper" >{imageItems}</div>
        );
    }
});

var SlyController = React.createClass({
    render: function () {
        return (
            <div className="slyController">
                <span className="previousController" ></span>
                <span className="nextController" ></span>
            </div>
        );
    }
});


var SlyView = React.createClass({
    getDefaultProps: function () {
        return {
            selectedProduct: React.PropTypes.object,
            items: React.PropTypes.array
        }
    },

    render: function () {
        var item = '';
        if(this.props.items && this.props.items.length > 0) {
            item = (<SlyItems items={this.props.items} key="items" ref="items"/>);
        }
        return (
            <div className="slyContainer">
                <div className="slyItemContainer" key="itemWrapper">
                    {item}
                </div>
                <SlyController key="controls"/>
            </div>
        );
    }
});

module.exports = SlyView;