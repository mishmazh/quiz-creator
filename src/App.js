import Layout from "./hoc/Layout/Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import QuizList from "./containers/QuizList/QuizList";
import Auth from "./containers/Auth/Auth";
import Quiz from "./containers/Quiz/Quiz";
import Home from "./components/Home/Home";
import { connect } from "react-redux";
import Logout from "./components/Logout/Logout";

// yarn upgrade-interactive --latest
// yarn add -D [package]
const App = (props) => {
  let routes = (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/quiz/:id" element={<Quiz />} />
      <Route path="/quiz-list" element={<QuizList />} />
      <Route path="/" element={<Home />} />
      {/*<Route path="/" element={} />*/}
      <Navigate to="/" />
    </Routes>
  );

  if (props.isAuth) {
    routes = (
      <Routes>
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/quiz-creator" element={<QuizCreator />} />
        <Route path="/quiz-list" element={<QuizList />} />
        <Route path="/" element={<Home />} />
        <Route path="/logout" element={<Logout />} />
        <Navigate to="/" />
      </Routes>
    );
  }

  return <Layout>{routes}</Layout>;
};

function mapStateToProps(state) {
  return {
    isAuth: !!state.auth.token,
  };
}

export default connect(mapStateToProps, null)(App);
