import classes from "./MenuToggle.module.scss";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import Icon from "../../UI/Icon/Icon";

const MenuToggle = ({ isOpen, onToggle }) => {
  const cls = [classes.menuToggle];

  if (isOpen) {
    cls.push(classes.open);
  }

  return (
    <div className={cls.join(" ")}>
      <Icon icon={isOpen ? faTimes : faBars} onClick={onToggle} />
    </div>
  );
};

export default MenuToggle;
