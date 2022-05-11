import classes from "./Input.module.scss";

// function isInvalid({ valid, touched, shouldValidate }) {
//   return !valid && shouldValidate && touched;
// }

const Input = ({ type, label, ...props }) => {
  const cls = [classes.Input];
  const inputType = type || "text";
  const htmlFor = `${inputType}-${Math.random()}`;

  // if (isInvalid(props)) {
  //   cls.push(classes.invalid);
  // }

  return (
    <div className={cls.join(" ")}>
      <label htmlFor={htmlFor}>{label}</label>
      <input type={inputType} id={htmlFor} {...props} />

      {/* {isInvalid(props) ? (
        <span>{props.errorMessage || "Введите верное значение"}</span>
      ) : null} */}
    </div>
  );
};

export default Input;
