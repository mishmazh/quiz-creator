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
      {({ status, isSubmitting }) => {
        return (
          <>
            <div className={classes.title}>Регистрация</div>
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

              {errorMessage && <TextError>Что-то пошло не так</TextError>}

              <Button type="submit" classType="primary">
                Зарегистрироваться
              </Button>

              <NavLink className={classes.link} to="/">
                Уже есть учетная запись?
              </NavLink>
            </Form>
          </>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;
