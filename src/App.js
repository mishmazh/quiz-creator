import React, { useEffect } from "react";
import Layout from "./hoc/Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import QuizCreator from "./components/QuizCreatorPage/QuizCreator";
import QuizList from "./components/QuizListPage/QuizList";
import AuthPage from "./pages/AuthPage";
import Quiz from "./components/QuizPage/Quiz";
import { useSelector } from "react-redux";
import Logout from "./components/Navigation/Logout/Logout";
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
      <Route path="/quiz/:id" element={<Quiz />} />
      <Route path="/quiz-list" element={<QuizList />} />
      <Route path="/quiz-creator" element={<Navigate to="/" />} />
    </Routes>
  );

  if (token) {
    routes = (
      <Routes>
        <Route path="/quiz-creator" element={<QuizCreator />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/quiz-list" element={<QuizList />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<Navigate to="/quiz-creator" />} />
        <Route path="/register" element={<Navigate to="/quiz-creator" />} />
      </Routes>
    );
  }

  return <Layout>{routes}</Layout>;
};

export default App;
