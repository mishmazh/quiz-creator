import classes from "./AuthForm.module.scss";
import FormInput from "../../UI/FormInput/FormInput";
import Button from "../../UI/Button/Button";
import { Form, Formik } from "formik";

const AuthForm = ({
  initialValues,
  validationSchema,
  loginHandler,
  registerHandler,
  onSubmit,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ status, isSubmitting }) => {
        return (
          <>
            <div className={classes.title}>Авторизация</div>
            <Form className={classes.authForm}>
              <FormInput
                type="email"
                name="email"
                placeholder="Введите Email..."
              />
              <FormInput
                type="password"
                name="password"
                placeholder="Введите пароль..."
              />
              <Button type="submit" classType="primary">
                Войти
              </Button>
              <Button type="submit" classType="success">
                Зарегистрироваться
              </Button>
            </Form>
          </>
        );
      }}
    </Formik>
  );
};

export default AuthForm;
