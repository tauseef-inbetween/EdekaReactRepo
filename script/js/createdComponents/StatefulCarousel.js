var CarouselItems = React.createClass({

    propTypes: {
        selectedIndex: React.PropTypes.number,
        items: React.PropTypes.arrayOf(React.PropTypes.element),
        wheeling: React.PropTypes.func,
        handleThumbClick: React.PropTypes.func
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
        var that = this;
        var selectedIndex = that.props.selectedIndex;
        var carouselItem = _.map(that.props.items, function (item, i) {
            return (
                <div className={"carouselItem " + (selectedIndex == i ? 'selectedItem' : '') } key={"item" + i}
                     ref={"item" + i} onClick={that.props.handleThumbClick}>{item}</div>
            );
        });
        return (
            <div className="carouselItemContainer"
                 onWheel={that.props.wheeling}
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
        isSaved: React.PropTypes.bool
    },

    getInitialState: function () {
        return {
            moveDuration: 600,
            previousLeftPosition: 0,
            leftPosition: 0
        }
    },

    thumbClick: function () {
        CarouselStore.setPreviousLeftPosition(this.state.leftPosition);
        CarouselStore.setLeftPositionWithTrigger(this.state.leftPosition);
    },

    wheeling: function (event) {
        if (event.deltaY >= 100) {
            this.rightButtonClicked();
        } else if (event.deltaY <= -100) {

            this.leftButtonClicked();
        }
    },

    leftButtonClicked: function () {
        this.handleButtonClick('left');
    },

    rightButtonClicked: function () {
        this.handleButtonClick('right');
    },

    handleButtonClick: function (direction) {
        var $container = $(this.refs.items.refs.carouselItemContainer.getDOMNode());
        var left = this.state.leftPosition;
        var right = left + $container.outerWidth();
        var itemWidth = this.refs.items.getWidthOfSingleItem();
        var moveLength = itemWidth * 5;
        if(direction == 'left') {
            if (left == 0) {
                moveLength += (right * -1);
            } else if (left > (moveLength * -1)) {
                moveLength = left * -1;
            }
            CarouselStore.setPreviousLeftPosition(left);
            CarouselStore.setLeftPositionWithTrigger(left + moveLength);
            //this.setState({previousLeftPosition: left, leftPosition: (left + moveLength)});
        } else {
            if (right == moveLength) {
                moveLength = left;
            } else if (right < 2 * moveLength) {
                moveLength = right - moveLength;
            }
            CarouselStore.setPreviousLeftPosition(left);
            CarouselStore.setLeftPositionWithTrigger(left - moveLength);
            //this.setState({previousLeftPosition: left, leftPosition: (left - moveLength)});
        }
    },

    moveCarouselToPosition: function () {
        var that = this;
        var left = that.state.leftPosition;
        var $container = $(that.refs.items.refs.carouselItemContainer.getDOMNode());
        $container.css('right', 'auto').animate({left: left + 'px'}, that.state.moveDuration, 'easeInOutCubic');
    },

    jumpToSelectedProduct: function (index) {
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

    jumpToPreviousPosition: function () {
        var $container = $(this.refs.items.refs.carouselItemContainer.getDOMNode());
        $container.css('left', (this.state.previousLeftPosition) + 'px');
    },

    listStateChanged: function () {
        this.setState({
            moveDuration: CarouselStore.getMoveDuration(),
            previousLeftPosition: CarouselStore.getPreviousLeftPosition(),
            leftPosition: CarouselStore.getLeftPosition()
        });
    },

    slideCarousel: function () {
        if(this.state.leftPosition == this.state.previousLeftPosition ) {
            this.jumpToSelectedProduct(this.props.selectedIndex);
        } else {
            this.jumpToPreviousPosition();
            this.moveCarouselToPosition();
        }
    },

    componentWillMount: function () {
        this.listStateChanged();
    },

    componentDidUpdate: function () {
        this.slideCarousel();
    },

    componentDidMount () {
        this.slideCarousel();
        CarouselStore.bind('change', this.listStateChanged);
    },

    componentWillUnmount: function () {
        CarouselStore.unbind('change', this.listStateChanged);
    },

    render: function () {
        var carouselPosition = {
            left: this.state.previousLeftPosition + 'px'
        };
        return (
            <div className="carouselContainer">
                <div className="carouselItemWrapper" key="itemWrapper">
                    <CarouselItems items={this.props.items} wheeling={this.wheeling} handleThumbClick={this.thumbClick}
                                   selectedIndex={this.props.selectedIndex} key="items" ref="items"/>
                </div>
                <CarouselController key="controls" leftBtnClick={this.leftButtonClicked}
                                    rightBtnClick={this.rightButtonClicked}/>
            </div>
        );
    }
});