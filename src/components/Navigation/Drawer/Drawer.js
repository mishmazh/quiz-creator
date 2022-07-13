import classes from "./Drawer.module.scss";
import Backdrop from "../../UI/Backdrop";
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

  const cls = [classes.drawer];

  if (!isOpen) {
    cls.push(classes.close);
  }

  const links = [{ to: "/quiz-list", label: "Quiz list" }];

  if (isAuth) {
    links.push({ to: "/quiz-creator", label: "Create your quiz" });
    links.push({ to: "/logout", label: "Logout" });
  } else {
    links.push({ to: "/", label: "Authorization" });
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
