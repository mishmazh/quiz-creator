import React from "react";
import classes from "./Layout.module.scss";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";

class Layout extends React.Component {
  state = {
    menu: false,
  };

  menuToggleHandler = () => {
    this.setState({
      menu: !this.state.menu,
    });
  };

  menuCloseHandler = () => {
    this.setState({
      menu: false,
    });
  };

  render() {
    return (
      <div className={classes.Layout}>
        <Drawer onClose={this.menuCloseHandler} isOpen={this.state.menu} />
        <MenuToggle
          onToggle={this.menuToggleHandler}
          isOpen={this.state.menu}
        />

        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
