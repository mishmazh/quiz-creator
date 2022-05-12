import React, { useState } from "react";
import classes from "./Layout.module.scss";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const [menu, setMenu] = useState(false);
  const { token } = useSelector((state) => state.auth);

  return (
    <div className={classes.Layout}>
      <MenuToggle onToggle={() => setMenu(!menu)} isOpen={menu} />
      <Drawer onClose={() => setMenu(false)} isOpen={menu} isAuth={token} />

      {children}
    </div>
  );
};

export default Layout;
