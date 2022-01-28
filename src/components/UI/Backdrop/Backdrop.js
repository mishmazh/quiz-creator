import classes from "./Backdrop.module.scss";

const Backdrop = (props) => {
  const cls = [classes.Backdrop, props.type];

  return <div className={cls.join(" ")} onClick={props.onClick} />;
};

export default Backdrop;
