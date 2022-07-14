import React, { useEffect } from "react";
import Layout from "./hoc/Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import QuizCreatorPage from "./pages/QuizCreatorPage";
import QuizListPage from "./pages/QuizListPage";
import AuthPage from "./pages/AuthPage";
import QuizPage from "./pages/QuizPage";
import { useSelector } from "react-redux";
import Logout from "./components/Navigation/Logout";
import { useActions } from "./hooks/useActions";
import "./style.css";

const App = () => {
  const { token } = useSelector((state) => state.auth);
  const { autoLogin } = useActions();

  useEffect(() => {
    autoLogin();
  }, []);

  let routes = (
    <Routes>
      <Route path="*" element={<AuthPage />} />
      <Route path="/quiz/:id" element={<QuizPage />} />
      <Route path="/quiz-list" element={<QuizListPage />} />
      <Route path="/quiz-creator" element={<Navigate to="/" />} />
      <Route path="/:route" element={<Navigate to="/" />} />
    </Routes>
  );

  if (token) {
    routes = (
      <Routes>
        <Route path="/quiz-creator" element={<QuizCreatorPage />} />
        <Route path="/quiz/:id" element={<QuizPage />} />
        <Route path="/quiz-list" element={<QuizListPage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<Navigate to="/quiz-creator" />} />
        <Route path="/register" element={<Navigate to="/quiz-creator" />} />
      </Routes>
    );
  }

  return <Layout>{routes}</Layout>;
};

export default App;
