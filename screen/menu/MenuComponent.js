var Menu = React.createClass({

    propTypes: {

    },

    getInitialState: function () {
        return {
            menuList: MenuListStore.getData()
        };
    },

    listStateChanged: function () {
        this.setState({menuList: MenuListStore.getData()});
    },
    componentDidMount: function () {
        MenuListStore.bind('change', this.listStateChanged);
    },
    componentWillUnmount: function () {
        MenuListStore.unbind('change', this.listStateChanged);
    },


    render: function () {
        var createButtonVisibilityClass = "btn btn-primary menuItem";
        var createButtonClickBound = '';
        var menuItems = _.map(this.state.menuList, function (item, i) {
            var boundClick = menuButtonClicked.bind(this, item.title);
            if (item.isActive) {
                createButtonClickBound = createButtonClicked.bind(this, item.title);
                if (item.canCreate) {
                    createButtonVisibilityClass += " createButtonVisible";
                } else {
                    createButtonVisibilityClass += " createButtonNotVisible";
                }
            }
            return (
                <MenuItem key={i} menuItem={item} onClick={boundClick}/>
            );
        });
        return (
            <div className="Menu">
                <div id="edekaCSHeaderLogo"></div>
                {menuItems}

                <div id="masterCreateNewButtonContainer">
                    <input type="button" id="masterCreateNewButton" onClick={createButtonClickBound}
                           className={createButtonVisibilityClass} tabIndex="-1" value="Create"/>
                </div>

            </div>
        )
    }
});