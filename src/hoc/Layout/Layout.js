import React, { useState } from "react";
import classes from "./Layout.module.scss";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";
import { connect } from "react-redux";

const Layout = (props) => {
  const [menu, setMenu] = useState(false);

  return (
    <div className={classes.Layout}>
      <MenuToggle onToggle={() => setMenu(!menu)} isOpen={menu} />
      <Drawer
        onClose={() => setMenu(false)}
        isOpen={menu}
        isAuth={props.isAuth}
      />

      <main>{props.children}</main>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isAuth: state.auth.token,
  };
}

export default connect(mapStateToProps, null)(Layout);
