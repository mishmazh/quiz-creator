import React from "react";
import classes from "./Drawer.module.scss";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { NavLink } from "react-router-dom";

const Drawer = ({ onClose, isOpen, isAuth }) => {
  const renderLinks = (links) => {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink to={link.to} onClick={onClose}>
            {link.label}
          </NavLink>
        </li>
      );
    });
  };

  const cls = [classes.Drawer];

  if (!isOpen) {
    cls.push(classes.close);
  }

  const links = [
    { to: "/", label: "Домашняя страница" },
    { to: "/quiz-list", label: "Список тестов" },
  ];

  if (isAuth) {
    links.push({ to: "/quiz-creator", label: "Создать свой тест" });
    links.push({ to: "/logout", label: "Выйти" });
  } else {
    links.push({ to: "/", label: "Авторизация" });
  }

  return (
    <>
      <nav className={cls.join(" ")}>
        <ul>{renderLinks(links)}</ul>
      </nav>
      {isOpen && <Backdrop onClose={onClose} />}
    </>
  );
};

export default Drawer;
