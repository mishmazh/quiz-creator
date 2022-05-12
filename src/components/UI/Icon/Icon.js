import classes from "./Icon.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ classType, icon, ...props }) => (
  <FontAwesomeIcon
    className={classes[classType] || classes.defaultIcon}
    icon={icon}
    {...props}
  />
);

export default Icon;
