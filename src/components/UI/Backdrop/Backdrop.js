import classes from "./Backdrop.module.scss";

const Backdrop = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

export default Backdrop;
