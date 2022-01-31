import classes from "./Backdrop.module.scss";

const Backdrop = (props) => {
  const cls = [classes.Backdrop, props.type];

  return <div className={cls.join(" ")} onClick={props.onClose} />;
};

export default Backdrop;
