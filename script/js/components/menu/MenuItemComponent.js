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