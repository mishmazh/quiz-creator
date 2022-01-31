import React, { useState } from "react";
import classes from "./Layout.module.scss";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";

const Layout = (props) => {
  const [menu, setMenu] = useState(false);

  const menuCloseHandler = () => {
    setMenu(false);
  };
  const menuToggleHandler = () => {
    setMenu(!menu);
  };

  return (
    <div className={classes.Layout}>
      <Drawer onClose={menuCloseHandler} isOpen={menu} />
      <MenuToggle onToggle={menuToggleHandler} isOpen={menu} />

      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
