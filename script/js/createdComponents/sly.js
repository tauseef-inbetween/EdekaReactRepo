var SlyItems = React.createClass({
    getDefaultProps: function () {
        return {
            items: React.PropTypes.array
        }
    },

    render: function () {
        var imageItems = _.map(this.props.items, function (item, i) {
            var slyClass = "slyItem" + (i == 1 ? ' active' : '');
            return (
                <div key={'item' + i} className={slyClass}>
                    {item}
                </div>
            );
        });
        return (
            <div className="slyItemWrapper">{imageItems}</div>
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


var Sly = React.createClass({
    getDefaultProps: function () {
        return {
            selectedProduct: React.PropTypes.object,
            items: React.PropTypes.array
        }
    },

    render: function () {
        return (
            <div className="slyContainer">
                <div className="slyItemContainer" key="itemWrapper">
                    <SlyItems items={this.props.items} key="items" ref="items"/>
                </div>
                <SlyController key="controls"/>
            </div>
        );
    }
});