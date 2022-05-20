import classes from "./AuthForms.module.scss";
import FormInput from "../../UI/FormInput/FormInput";
import Button from "../../UI/Button/Button";
import { Form, Formik } from "formik";
import TextError from "../../UI/TextError/TextError";
import { NavLink } from "react-router-dom";

const RegisterForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  errorMessage,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => {
        return (
          <>
            <div className={classes.title}>Registration</div>
            <Form className={classes.authForm}>
              <FormInput
                type="email"
                name="email"
                label="Email"
                placeholder="Enter email..."
              />
              <FormInput
                type="password"
                name="password"
                label="Password"
                placeholder="Enter password..."
              />

              {errorMessage && <TextError>{errorMessage}</TextError>}

              <Button type="submit" classType="primary" disabled={isSubmitting}>
                {isSubmitting ? "Loading..." : "Register an account"}
              </Button>

              <NavLink className={classes.link} to="/">
                Already have an account?
              </NavLink>
            </Form>
          </>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;
