var MenuItem = React.createClass({
  render: function(){
    var menuClass = "menuItem";
    if(this.props.menuItem.isActive) {
      menuClass += " activeScreenButton";
    } else {
      menuClass += " screenNavButton";
    }

    var iconClass = 'menuIcon ' + this.props.menuItem.iconClass;
    return (
        <div className = {menuClass} onClick={this.props.onClick}>
          <div className = {iconClass}></div>
          <div className = "menuTitle">{this.props.menuItem.title}</div>
        </div>
    )
  }
});

var Menu = React.createClass({
  getInitialState: function() {
    return{
      menuList: MenuListStore.getAllMenus()
    };
  },


  listStateChanged: function() {
    this.setState({menuList: MenuListStore.getAllMenus()});
  },
  componentDidMount: function() {
    MenuListStore.bind( 'change', this.listStateChanged );
  },
  componentWillUnmount: function() {
    MenuListStore.unbind( 'change', this.listStateChanged );
  },


  render: function(){
    var menuItems = [];
    var createButtonVisibilityClass = "btn btn-primary menuItem";
    var createButtonClickBound = '';
    this.state.menuList.map(function(item, i) {
      var boundClick = menuButtonClicked.bind(this, item.title);
      if(item.isActive) {
        createButtonClickBound = createButtonClicked.bind(this, item.title);
        if (item.canCreate) {
          createButtonVisibilityClass += " createButtonVisible";
        } else {
          createButtonVisibilityClass += " createButtonNotVisible";
        }
      }
      return (
          menuItems.push(<MenuItem key={i} menuItem={item} onClick={boundClick}/>)
      );
    });
    return(
        <div className = "Menu">
          <div id="edekaCSHeaderLogo"></div>
          {menuItems}

          <div id="masterCreateNewButtonContainer">
            <input type="button" id="masterCreateNewButton" onClick={createButtonClickBound} className={createButtonVisibilityClass} value="Create"/>
          </div>

        </div>
    )
  }
});