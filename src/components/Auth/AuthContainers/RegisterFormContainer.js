import * as Yup from "yup";
import RegisterForm from "../AuthForms/RegisterForm";
import { useActions } from "../../../hooks/useActions";
import { useSelector } from "react-redux";

const RegisterFormContainer = () => {
  const { errorMessage } = useSelector((state) => state.auth);
  const { auth } = useActions();

  const initialValues = {
    email: "",
    password: "",
    returnSecureToken: true,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid format").required("Field is required"),
    password: Yup.string()
      .required("Field is required")
      .min(6, "The number of characters must be at least 6"),
  });

  const onSubmit = (values) => auth(values, false);

  return (
    <RegisterForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      errorMessage={errorMessage}
    />
  );
};

export default RegisterFormContainer;
