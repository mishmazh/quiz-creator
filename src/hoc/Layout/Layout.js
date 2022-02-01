import React, { useState } from "react";
import classes from "./Layout.module.scss";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";

const Layout = (props) => {
  const [menu, setMenu] = useState(false);

  return (
    <div className={classes.Layout}>
      <MenuToggle onToggle={() => setMenu(!menu)} isOpen={menu} />
      <Drawer onClose={() => setMenu(false)} isOpen={menu} />

      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
