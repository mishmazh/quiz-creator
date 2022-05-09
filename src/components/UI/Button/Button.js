import classes from "./Button.module.scss";

const Button = ({ children, classType, ...props }) => {
  const cls = [classes.Button, classes[classType]];

  return (
    <button className={cls.join(" ")} {...props}>
      {children}
    </button>
  );
};

export default Button;
