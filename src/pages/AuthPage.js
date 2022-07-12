import { Route, Routes } from "react-router-dom";
import LoginFormContainer from "../components/AuthPage/AuthContainers/LoginFormContainer";
import RegisterFormContainer from "../components/AuthPage/AuthContainers/RegisterFormContainer";

const AuthPage = () => {
  return (
    <div className="auth-page">
      <Routes>
        <Route path="/" element={<LoginFormContainer />} />
        <Route path="/register" element={<RegisterFormContainer />} />
      </Routes>
    </div>
  );
};

export default AuthPage;
