import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import Icon from "../UI/Icon";

const MenuToggle = ({ isOpen, onToggle }) => {
  const cls = ["menu-toggle"];

  if (isOpen) {
    cls.push("open");
  }

  return (
    <div className={cls.join(" ")}>
      <Icon icon={isOpen ? faTimes : faBars} onClick={onToggle} />
    </div>
  );
};

export default MenuToggle;
