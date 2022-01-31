import Layout from "./hoc/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import QuizList from "./containers/QuizList/QuizList";
import Auth from "./containers/Auth/Auth";
import Quiz from "./containers/Quiz/Quiz";
import Home from "./components/Home/Home";

// yarn upgrade-interactive --latest
// yarn add -D [package]
const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/quiz-creator" element={<QuizCreator />} />
        <Route path="/quiz-list" element={<QuizList />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
};

export default App;
