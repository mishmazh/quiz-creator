import { useSelector } from "react-redux";
import { useActions } from "../../../hooks/useActions";
import * as Yup from "yup";
import LoginForm from "../AuthForms/LoginForm";
import { useNavigate } from "react-router-dom";

const LoginFormContainer = () => {
  const navigate = useNavigate();

  const { errorMessage } = useSelector((state) => state.auth);
  const { auth } = useActions();

  const initialValues = {
    email: "",
    password: "",
    returnSecureToken: true,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid format").required("Field is required"),
    password: Yup.string().required("Field is required"),
  });

  const onSubmit = (values) => auth(values, true);

  const navigateToRegister = () => navigate("/register");

  return (
    <LoginForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      errorMessage={errorMessage}
      redirectHandler={navigateToRegister}
    />
  );
};

export default LoginFormContainer;
