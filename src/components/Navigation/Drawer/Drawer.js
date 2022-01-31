import React from "react";
import classes from "./Drawer.module.scss";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Домашняя страница" },
  { to: "/auth", label: "Авторизация" },
  { to: "/quiz-creator", label: "Создать свой тест" },
  { to: "/quiz-list", label: "Список тестов" },
];

class Drawer extends React.Component {
  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink to={link.to} onClick={this.props.onClose}>
            {link.label}
          </NavLink>
        </li>
      );
    });
  }

  render() {
    const cls = [classes.Drawer];

    if (!this.props.isOpen) {
      cls.push(classes.close);
    }

    return (
      <>
        <nav className={cls.join(" ")}>
          <ul>{this.renderLinks()}</ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClose={this.props.onClose} /> : null}
      </>
    );
  }
}

export default Drawer;
