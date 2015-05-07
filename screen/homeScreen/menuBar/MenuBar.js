var MenuBar = React.createClass({

    propTypes: {
    },

    getInitialState: function () {
        return {
            menuList: MenuStore.getData()
        };
    },

    listStateChanged: function () {
        this.setState({menuList: MenuStore.getData()});
    },

    //Binding Store to state change on Mount of Component
    componentDidMount: function () {
        MenuStore.bind('change', this.listStateChanged);
    },

    //UnBinding Store to state change on UnMount of Component
    componentWillUnmount: function () {
        MenuStore.unbind('change', this.listStateChanged);
    },

    getMenuItems: function (menuList) {
        var that = this;
        var createButtonVisibilityClass = "btn btn-primary menuItem";
        var createButtonClick = '';
        var menuItems = _.map(menuList, function (item, i) {

            //Bind title with Menu-Item click
            var menuClick = menuItemClicked.bind(that, item.title);

            //Bind Create Button with Menu Title and show/hide create button based on active menu
            if (item.isActive) {
                createButtonClick = createButtonClicked.bind(that, item.title);
                if (item.canCreate) {
                    createButtonVisibilityClass += " createButtonVisible";
                } else {
                    createButtonVisibilityClass += " createButtonNotVisible";
                }
            }
            //return a menu item [view] to {menuItems} variable
            return (
                <MenuItem key={i} menuItem={item} onClick={menuClick}/>
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