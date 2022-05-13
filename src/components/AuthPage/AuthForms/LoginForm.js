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
            <div className={classes.title}>Авторизация</div>
            <Form className={classes.authForm}>
              <FormInput
                type="email"
                name="email"
                label="Email"
                placeholder="Введите Email..."
              />
              <FormInput
                type="password"
                name="password"
                label="Пароль"
                placeholder="Введите пароль..."
              />

              {errorMessage && <TextError>{errorMessage}</TextError>}

              <Button type="submit" classType="primary" disabled={isSubmitting}>
                {isSubmitting ? "Загрузка..." : "Войти"}
              </Button>
              <Button
                type="button"
                onClick={redirectHandler}
                classType="success"
                disabled={isSubmitting}
              >
                Регистрация
              </Button>
            </Form>
          </>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
