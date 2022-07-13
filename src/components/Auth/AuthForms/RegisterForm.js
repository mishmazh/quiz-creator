import FormInput from "../../UI/FormInput/FormInput";
import Button from "../../UI/Button";
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
          <div>
            <div className="primary-title">Registration</div>
            <Form className="auth-form">
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

              <div className="btns-block">
                <Button
                  type="submit"
                  className="btn-success"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Loading..." : "Register an account"}
                </Button>

                <NavLink className="auth-form__link" to="/">
                  Already have an account?
                </NavLink>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;
