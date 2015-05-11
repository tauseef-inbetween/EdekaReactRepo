var CarouselActionControl = React.createClass({

    //@required: props
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
