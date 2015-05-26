var React = require('react');
var _ = require('lodash');

var CarouselItem = React.createClass({

    //@required: props
    propTypes: {
        selectedIndex: React.PropTypes.number,
        items: React.PropTypes.arrayOf(React.PropTypes.element),
        wheeling: React.PropTypes.func,
        left: React.PropTypes.number
    },

    //@set: left based on previous left and width based on no of items
    componentDidUpdate: function () {
        var itemWidth = this.getWidthOfSingleItem();
        this.refs.carouselItemContainer.getDOMNode().setAttribute("style", "left: " + this.props.left + "px; width:" + itemWidth * this.props.items.length + "px");
    },

    //@set: left based on previous left and width based on no of items
    componentDidMount: function () {
        var itemWidth = this.getWidthOfSingleItem();
        this.refs.carouselItemContainer.getDOMNode().setAttribute("style", "left: " + this.props.left + "px; width:" + itemWidth * this.props.items.length + "px");
    },

    //@return: width of single element in carousel
    getWidthOfSingleItem: function () {
        return this.refs.item0.getDOMNode().offsetWidth;
    },

    getCarouselItem: function (items) {
        var selectedIndex = this.props.selectedIndex;
        return _.map(items, function (item, i) {
            return (
                <div className={"carouselItem " + (selectedIndex == i ? 'selectedItem' : '') } key={"item" + i}
                     ref={"item" + i}>{item}</div>
            );
        });
    },

    render: function () {

        //@get: number of carousel items in {carouselItem} variable
        var carouselItem = this.getCarouselItem(this.props.items);

        //@return: actual component content
        return (
            <div className="carouselItemContainer"
                 onWheel={this.props.wheeling}
                 ref="carouselItemContainer">{carouselItem}</div>
        );
    }
});

module.exports = CarouselItem;