var React = require('react');

var CarouselActionControl = React.createClass({

    //@required: props
    propTypes: {
        leftBtnClick: React.PropTypes.func.isRequired,
        rightBtnClick: React.PropTypes.func.isRequired
    },

    render: function () {
        return (
            <div className="carouselController">
                <span className="previousController" ref="previousBtn" onClick={this.props.leftBtnClick}></span>
                <span className="nextController" ref="nextBtn" onClick={this.props.rightBtnClick}></span>
            </div>
        );
    }
});

module.exports = CarouselActionControl;