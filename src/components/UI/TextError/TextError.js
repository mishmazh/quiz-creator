import classes from "./TextError.module.scss";

const TextError = ({ children }) => (
  <div className={classes.error}>{children}</div>
);

export default TextError;
