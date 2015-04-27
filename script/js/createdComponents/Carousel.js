var CarouselItems = React.createClass({

    propTypes: {
        selectedIndex: React.PropTypes.number,
        items: React.PropTypes.arrayOf(React.PropTypes.element),
        wheeling: React.PropTypes.func
    },

    componentDidUpdate: function () {
        var itemWidth = this.getWidthOfSingleItem();
        this.refs.carouselItemContainer.getDOMNode().setAttribute("style", "width:" + itemWidth * this.props.items.length + "px");
    },
    componentDidMount: function () {
        var itemWidth = this.getWidthOfSingleItem();
        this.refs.carouselItemContainer.getDOMNode().setAttribute("style", "width:" + itemWidth * this.props.items.length + "px");
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
        selectedIndex: React.PropTypes.number
    },

    leftButtonClicked: function () {
        var itemWidth = this.refs.items.getWidthOfSingleItem();
        var moveLength = itemWidth * 5;
        var $container = $(this.refs.items.refs.carouselItemContainer.getDOMNode());
        var position = $container.position();
        var left = position.left;
        var right = left + $container.outerWidth();
        if (left == 0) {
            moveLength += (right * -1);
        } else if (left > (moveLength * -1)) {
            moveLength = left * -1;
        }
        $container.css('right', 'auto').animate({left: (left + moveLength) + 'px'}, {
            easing: 'easeInOutCubic',
            duration: 600
        });
    },

    rightButtonClicked: function () {
        var itemWidth = this.refs.items.getWidthOfSingleItem();
        var moveLength = itemWidth * 5;
        var $container = $(this.refs.items.refs.carouselItemContainer.getDOMNode());
        var position = $container.position();
        var left = position.left;
        var right = left + $container.outerWidth();
        if (right == moveLength) {
            moveLength = left;
        } else if (right < 2 * moveLength) {
            moveLength = right - moveLength;
        }

        $container.css('right', 'auto').animate({left: (left - moveLength) + 'px'}, {
            easing: 'easeInOutCubic',
            duration: 600
        });
    },

    moveTo: function (index) {
        var itemWidth = this.refs.items.getWidthOfSingleItem();
        var $container = $(this.refs.items.refs.carouselItemContainer.getDOMNode());
        var position = $container.position();
        var left = position.left;

        var moveLength = 0;
        var right = left + $container.outerWidth();
        if (index > 4) {
            index = Math.trunc(index / 5);
            moveLength = (itemWidth * 5) * index;
            if (moveLength > (right - itemWidth * 5)) {
                moveLength = right - itemWidth * 5;
            }
        }

        $container.css('left', (left - moveLength) + 'px');
    },

    componentDidMount () {
        if (this.props.selectedIndex > 0) {
            this.moveTo(this.props.selectedIndex);
        }
    },

    componentDidUpdate: function () {
        if (this.props.selectedIndex > 0) {
            this.moveTo(this.props.selectedIndex);
        }
    },

    wheeling: function (event) {
        if (event.deltaY == 100) {
            this.rightButtonClicked();
        } else if (event.deltaY == -100) {
            this.leftButtonClicked();
        }
    },

    render: function () {
        return (
            <div className="carouselContainer">
                <div className="carouselItemWrapper" key="itemWrapper">
                    <CarouselItems items={this.props.items} wheeling={this.wheeling}
                                   selectedIndex={this.props.selectedIndex} key="items" ref="items"/>
                </div>
                <CarouselController key="controls" leftBtnClick={this.leftButtonClicked}
                                    rightBtnClick={this.rightButtonClicked}/>
            </div>
        );
    }
});