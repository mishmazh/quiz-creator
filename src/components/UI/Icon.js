import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ className = "primary-icon", icon, ...props }) => (
  <FontAwesomeIcon className={className} icon={icon} {...props} />
);

export default Icon;
