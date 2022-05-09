import classes from "./Icon.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ icon, ...props }) => (
  <FontAwesomeIcon className={classes.icon} icon={icon} {...props} />
);

export default Icon;
