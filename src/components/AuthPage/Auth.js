import classes from "./Auth.module.scss";
import { Route, Routes } from "react-router-dom";
import LoginFormContainer from "./AuthContainers/LoginFormContainer";
import RegisterFormContainer from "./AuthContainers/RegisterFormContainer";

const Auth = () => {
  return (
    <div className={classes.auth}>
      <Routes>
        <Route path="/" element={<LoginFormContainer />} />
        <Route path="/register" element={<RegisterFormContainer />} />
      </Routes>
    </div>
  );
};

export default Auth;
