import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const FormInput = ({ label, name, ...props }) => {
  return (
    <div className="primary-input">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...props} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default FormInput;
