import classes from "./AuthForms.module.scss";
import FormInput from "../../UI/FormInput/FormInput";
import Button from "../../UI/Button/Button";
import { Form, Formik } from "formik";
import TextError from "../../UI/TextError/TextError";

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
          <>
            <div className={classes.title}>Authorization</div>
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
                {isSubmitting ? "Loading..." : "Login"}
              </Button>
              <Button
                type="button"
                onClick={redirectHandler}
                classType="success"
                disabled={isSubmitting}
              >
                Sign Up
              </Button>
            </Form>
          </>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
