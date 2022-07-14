import FormInput from "../../UI/FormInput";
import Button from "../../UI/Button";
import { Form, Formik } from "formik";
import TextError from "../../UI/TextError";

const LoginForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  errorMessage,
  redirectHandler,
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
            <div className="primary-title">Authorization</div>
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
                  className="btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Loading..." : "Login"}
                </Button>
                <Button
                  type="button"
                  onClick={redirectHandler}
                  className="btn-success"
                  disabled={isSubmitting}
                >
                  Sign Up
                </Button>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
