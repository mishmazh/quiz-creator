import React from "react";
import classes from "./Drawer.module.scss";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { NavLink } from "react-router-dom";

class Drawer extends React.Component {
  renderLinks(links) {
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

    const links = [
      { to: "/", label: "Домашняя страница" },
      { to: "/quiz-list", label: "Список тестов" },
    ];

    if (this.props.isAuth) {
      links.push({ to: "/quiz-creator", label: "Создать свой тест" });
      links.push({ to: "/logout", label: "Выйти" });
    } else {
      links.push({ to: "/auth", label: "Авторизация" });
    }

    return (
      <>
        <nav className={cls.join(" ")}>
          <ul>{this.renderLinks(links)}</ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClose={this.props.onClose} /> : null}
      </>
    );
  }
}

export default Drawer;
