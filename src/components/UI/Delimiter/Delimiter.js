import classes from "./Delimiter.module.scss";

const Delimiter = ({ width }) => {
  return (
    <div className={classes.delimiter}>
      <div className={classes.line} style={{ width: `${width}%` }} />
    </div>
  );
};

export default Delimiter;
