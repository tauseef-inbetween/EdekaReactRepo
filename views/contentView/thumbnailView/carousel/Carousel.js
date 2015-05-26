var React = require('react');
var $ = require('jquery');
require('jquery-ui');
var CarouselItem = require('./CarouselItem');
var CarouselActionControl = require('./CarouselActionControl');
var ContentAction = require('../../../../screen/contentScreen/ContentAction.js');
var ReactJestUtil = require('react-jest-util');

var Carousel = React.createClass({

    //@Required Props
    propTypes: {
        items: React.PropTypes.arrayOf(React.PropTypes.element).isRequired,
        selectedIndex: React.PropTypes.number,
        carouselPosition: React.PropTypes.object
    },

    //@returns: next left position based on carousel current position
    getNextLeftPosition: function () {
        var $container = $(this.refs.items.refs.carouselItemContainer.getDOMNode());
        var itemWidth = this.refs.items.getWidthOfSingleItem();
        var left = this.getCurrentLeftPosition();
        var moveLength = itemWidth * 5;
        var right = left + $container.outerWidth();
        if (left == 0) {
            moveLength += (right * -1);
        } else if (left > (moveLength * -1)) {
            moveLength = left * -1;
        }
        return (left + moveLength);
    },

    //@return: next right position based on carousel current position
    getNextRightPosition: function () {
        var itemWidth = this.refs.items.getWidthOfSingleItem();
        var $container = $(this.refs.items.refs.carouselItemContainer.getDOMNode());
        var left = this.getCurrentLeftPosition();
        var moveLength = itemWidth * 5;
        var right = left + $container.outerWidth();
        if (right == moveLength) {
            moveLength = left;
        } else if (right < 2 * moveLength) {
            moveLength = right - moveLength;
        }
        return (left - moveLength);
    },

    //@return: current left position of carousel
    getCurrentLeftPosition: function () {
        var $container = $(this.refs.items.refs.carouselItemContainer.getDOMNode());
        return ($container.position().left);
    },

    leftButtonClicked: function () {
        var left = this.props.carouselPosition.leftPosition;
        var previousLeft = this.props.carouselPosition.leftPosition;

        //@check: if left and previous left is same then reset previousLeft to current left position
        if(this.props.carouselPosition.leftPosition === this.props.carouselPosition.previousLeftPosition) {
            previousLeft = this.getCurrentLeftPosition();
        }

        //@sets: next left and previous left positions in store
        ContentAction.carouselPositionChanged(this.getNextLeftPosition(), previousLeft);
    },

    rightButtonClicked: function () {
        var left = this.props.carouselPosition.leftPosition;
        var previousLeft = this.props.carouselPosition.leftPosition;

        //@check: if left and previous left is same then reset previousLeft to current left position
        if(this.props.carouselPosition.leftPosition === this.props.carouselPosition.previousLeftPosition) {
            previousLeft = this.getCurrentLeftPosition();
        }

        //@sets: next left and previous left positions in store
        ContentAction.carouselPositionChanged(this.getNextRightPosition(),previousLeft);
    },

    //@handle: Mouse wheel handled
    wheeling: function (event) {
        if (event.deltaY == 100) {
            this.rightButtonClicked();
        } else if (event.deltaY == -100) {
            this.leftButtonClicked();
        }
    },

    //@animate: carousel position based on left and previous left
    slideCarousel: function () {
        var $container = $(this.refs.items.refs.carouselItemContainer.getDOMNode());
        $container.css('right', 'auto').animate({left: this.props.carouselPosition.leftPosition + 'px'}, 600, 'easeInOutCubic');
    },

    //@jump: to selected product
    jumpToSelectedProduct: function (index) {
        var $container = $(this.refs.items.refs.carouselItemContainer.getDOMNode());
        var itemWidth = this.refs.items.getWidthOfSingleItem();
        var moveLength = 0;
        var right = $container.outerWidth();
        if (index > 4) {
            index = Math.trunc(index / 5);
            moveLength = (itemWidth * 5) * index;
            if (moveLength > (right - itemWidth * 5)) {
                moveLength = right - itemWidth * 5;
            }
        }
        var left = moveLength * -1;
        $container.css('left', (left) + 'px');
    },

    //@check: to jump on selected product or slide to next left or right
    componentDidMount: function () {
        if(this.props.carouselPosition.leftPosition == this.props.carouselPosition.previousLeftPosition) {
            this.jumpToSelectedProduct(this.props.selectedIndex);
        } else {
            this.slideCarousel();
        }
    },

    //@check: to jump on selected product or slide to next left or right
    componentDidUpdate: function () {
        if(this.props.carouselPosition.leftPosition == this.props.carouselPosition.previousLeftPosition) {
            this.jumpToSelectedProduct(this.props.selectedIndex);
        } else {
            this.slideCarousel();
        }
    },

    //#Recheck
    //@reconsider: Carousel Item inside wrapper because of css positioning [absolute, relative]
    //@binding: of event handlers on wheeling and left/right click
    render: function () {
        return (
            <div className="carouselContainer">
                <div className="carouselItemWrapper" key="itemWrapper">
                    <CarouselItem items={this.props.items} left={this.props.carouselPosition.previousLeftPosition} wheeling={this.wheeling}
                                   selectedIndex={this.props.selectedIndex} key="items" ref="items"/>
                </div>
                <CarouselActionControl key="controls" leftBtnClick={this.leftButtonClicked}
                    ref="controller" rightBtnClick={this.rightButtonClicked}/>
            </div>
        );
    }
});

module.exports = Carousel;