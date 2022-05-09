import * as Yup from "yup";
import { useActions } from "../../hooks/useActions";
import AuthForm from "./AuthForm/AuthForm";
import classes from "./Auth.module.scss";

const Auth = () => {
  const { auth } = useActions();

  const initialValues = {
    email: "",
    password: "",
    returnSecureToken: true,
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Неверный формат")
      .required("Поле обязательно для заполнения"),
    password: Yup.string().required("Поле обязательно для заполнения"),
  });

  const onSubmit = (values) => auth(values, true);

  // const loginHandler = (values) => auth(values, true);

  const registerHandler = (values) => auth(values, false);

  return (
    <div className={classes.auth}>
      <AuthForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        // loginHandler={loginHandler}
        registerHandler={registerHandler}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Auth;
