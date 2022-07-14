import React, { useState } from "react";
import MenuToggle from "../components/Navigation/MenuToggle";
import Drawer from "../components/Navigation/Drawer";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const [menu, setMenu] = useState(false);
  const { token } = useSelector((state) => state.auth);

  return (
    <div className="main-layout">
      <MenuToggle onToggle={() => setMenu(!menu)} isOpen={menu} />
      <Drawer onClose={() => setMenu(false)} isOpen={menu} isAuth={token} />

      {children}
    </div>
  );
};

export default Layout;
