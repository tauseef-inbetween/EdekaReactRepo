var CarouselItems = React.createClass({

    propTypes: {
        selectedIndex: React.PropTypes.number,
        items: React.PropTypes.arrayOf(React.PropTypes.element),
        wheeling: React.PropTypes.func,
        left: React.PropTypes.number
    },

    componentDidUpdate: function () {
        var itemWidth = this.getWidthOfSingleItem();
        this.refs.carouselItemContainer.getDOMNode().setAttribute("style", "left: " + this.props.left + "px; width:" + itemWidth * this.props.items.length + "px");
    },
    componentDidMount: function () {
        var itemWidth = this.getWidthOfSingleItem();
        this.refs.carouselItemContainer.getDOMNode().setAttribute("style", "left: " + this.props.left + "px; width:" + itemWidth * this.props.items.length + "px");
    },

    getWidthOfSingleItem: function () {
        return this.refs.item0.getDOMNode().offsetWidth;
    },

    render: function () {
        var selectedIndex = this.props.selectedIndex;
        var carouselItem = _.map(this.props.items, function (item, i) {
            return (
                <div className={"carouselItem " + (selectedIndex == i ? 'selectedItem' : '') } key={"item" + i}
                     ref={"item" + i}>{item}</div>
            );
        });
        return (
            <div className="carouselItemContainer"
                 onWheel={this.props.wheeling}
                 ref="carouselItemContainer">{carouselItem}</div>
        );
    }
});

var CarouselController = React.createClass({

    propTypes: {
        leftBtnClick: React.PropTypes.func.isRequired,
        rightBtnClick: React.PropTypes.func.isRequired
    },

    render: function () {
        return (
            <div className="carouselController">
                <span className="previousController" onClick={this.props.leftBtnClick}></span>
                <span className="nextController" onClick={this.props.rightBtnClick}></span>
            </div>
        );
    }
});

var Carousel = React.createClass({

    propTypes: {
        items: React.PropTypes.arrayOf(React.PropTypes.element).isRequired,
        selectedIndex: React.PropTypes.number,
        carouselPosition: React.PropTypes.object
    },

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

    getCurrentLeftPosition: function () {
        var $container = $(this.refs.items.refs.carouselItemContainer.getDOMNode());
        return ($container.position().left);
    },

    leftButtonClicked: function () {
        var left = this.props.carouselPosition.leftPosition;
        var previousLeft = this.props.carouselPosition.leftPosition;
        if(this.props.carouselPosition.leftPosition === this.props.carouselPosition.previousLeftPosition) {
            previousLeft = this.getCurrentLeftPosition();
        }
        carouselPositionChanged(this.getNextLeftPosition(), previousLeft);
    },

    rightButtonClicked: function () {
        var left = this.props.carouselPosition.leftPosition;
        var previousLeft = this.props.carouselPosition.leftPosition;
        if(this.props.carouselPosition.leftPosition === this.props.carouselPosition.previousLeftPosition) {
            previousLeft = this.getCurrentLeftPosition();
        }
        carouselPositionChanged(this.getNextRightPosition(),previousLeft);
    },

    wheeling: function (event) {
        if (event.deltaY == 100) {
            this.rightButtonClicked();
        } else if (event.deltaY == -100) {
            this.leftButtonClicked();
        }
    },

    slideCarousel: function () {
        var $container = $(this.refs.items.refs.carouselItemContainer.getDOMNode());
        $container.css('right', 'auto').animate({left: this.props.carouselPosition.leftPosition + 'px'}, 600, 'easeInOutCubic');
    },

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

    componentDidMount () {
        if(this.props.carouselPosition.leftPosition == this.props.carouselPosition.previousLeftPosition) {
            this.jumpToSelectedProduct(this.props.selectedIndex);
        } else {
            this.slideCarousel();
        }
    },

    componentDidUpdate: function () {
        if(this.props.carouselPosition.leftPosition == this.props.carouselPosition.previousLeftPosition) {
            this.jumpToSelectedProduct(this.props.selectedIndex);
        } else {
            this.slideCarousel();
        }
    },

    render: function () {
        return (
            <div className="carouselContainer">
                <div className="carouselItemWrapper" key="itemWrapper">
                    <CarouselItems items={this.props.items} left={this.props.carouselPosition.previousLeftPosition} wheeling={this.wheeling}
                                   selectedIndex={this.props.selectedIndex} key="items" ref="items"/>
                </div>
                <CarouselController key="controls" leftBtnClick={this.leftButtonClicked}
                                    rightBtnClick={this.rightButtonClicked}/>
            </div>
        );
    }
});