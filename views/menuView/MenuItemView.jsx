var React = require('react');

var MenuItemView = React.createClass({

    //Required props to be passed
    propTypes: {
        menuItem: React.PropTypes.object.isRequired,
        onClick: React.PropTypes.func.isRequired
    },

    render: function () {

        var menuClass = "menuItem";
        if (this.props.menuItem.isActive) {
            menuClass += " activeMenu";
        } else {
            menuClass += " inActiveMenu";
        }

        var iconClass = 'menuIcon ' + this.props.menuItem.iconClass;
        return (
            <div className={menuClass} onClick={this.props.onClick}>
                <div className={iconClass}></div>
                <div className="menuTitle">{this.props.menuItem.title}</div>
            </div>
        )
    }
});

module.exports = MenuItemView;