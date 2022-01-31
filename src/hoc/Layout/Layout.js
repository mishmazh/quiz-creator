import React from "react";
import classes from "./Layout.module.scss";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";
import { connect } from "react-redux";

const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      <MenuToggle onToggle={props.menuToggleHandler} isOpen={props.menu} />
      <Drawer onClose={props.menuCloseHandler} isOpen={props.menu} />

      <main>{props.children}</main>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    menu: state.menu,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    menuToggleHandler: () => dispatch({ type: "MENU_TOGGLE" }),
    menuCloseHandler: () => dispatch({ type: "MENU_CLOSE" }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
