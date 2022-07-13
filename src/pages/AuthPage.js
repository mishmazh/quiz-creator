import { Route, Routes } from "react-router-dom";
import LoginFormContainer from "../components/Auth/AuthContainers/LoginFormContainer";
import RegisterFormContainer from "../components/Auth/AuthContainers/RegisterFormContainer";

const AuthPage = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginFormContainer />} />
      <Route path="/register" element={<RegisterFormContainer />} />
    </Routes>
  );
};

export default AuthPage;
