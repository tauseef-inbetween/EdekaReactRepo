var React = require('react');
var MenuItemView = require('../../../views/menuView/MenuItemView.js');
var _ = require('lodash');
var MenuAction = require('./MenuActions');

var MenuBar = React.createClass({

    propTypes: {
        store: React.PropTypes.object
    },

    getInitialState: function () {
        return {
            menuList: []
        };
    },

    menuStateChanged: function () {
        this.setState({menuList: this.props.store.getData()});
    },

    //Binding Store to state change on Mount of Component
    componentDidMount: function () {
        this.props.store.bind('change', this.menuStateChanged);
    },

    //UnBinding Store to state change on UnMount of Component
    componentWillUnmount: function () {
        this.props.store.unbind('change', this.menuStateChanged);
    },

    componentWillMount: function () {
        this.menuStateChanged();
    },

    getMenuItems: function (menuList) {
        var that = this;
        var createButtonVisibilityClass = "btn btn-primary menuItem";
        var createButtonClick = '';
        var menuItems = _.map(menuList, function (item, i) {

            //Bind title with Menu-Item click
            var menuClick = MenuAction.menuItemClicked.bind(that, item.title);

            //Bind Create Button with Menu Title and show/hide create button based on active menu
            if (item.isActive) {
                createButtonClick = MenuAction.createButtonClicked.bind(that, item.title);
                if (item.canCreate) {
                    createButtonVisibilityClass += " createButtonVisible";
                } else {
                    createButtonVisibilityClass += " createButtonNotVisible";
                }
            }
            //return a menu item [view] to {menuItems} variable
            return (
                <MenuItemView key={i} ref={"item" + i} menuItem={item} onClick={menuClick}/>
            );
        });

        return {menuItems: menuItems, createButtonClick: createButtonClick, createButtonVisibilityClass: createButtonVisibilityClass};

    },

    render: function () {

        var menuData = this.getMenuItems(this.state.menuList);
        var menuItems = menuData.menuItems;
        var createButtonClick = menuData.createButtonClick;
        var createButtonVisibilityClass = menuData.createButtonVisibilityClass;

        return (
            <div className="Menu">
                <div id="edekaCSHeaderLogo"></div>

                {menuItems}

                <div id="masterCreateNewButtonContainer">
                    <input type="button" id="masterCreateNewButton" onClick={createButtonClick}
                           className={createButtonVisibilityClass} tabIndex="-1" value="Create"/>
                </div>

            </div>
        )
    }
});

module.exports = MenuBar;