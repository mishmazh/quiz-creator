import { useEffect } from "react";
import Preloader from "../components/UI/Preloader";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";
import QuizListItem from "../components/QuizList/QuizListItem";

const QuizListPage = () => {
  const { quizes, loading } = useSelector((state) => state.quiz);
  const { fetchQuizes, deleteQuizById } = useActions();

  useEffect(() => {
    fetchQuizes();
  }, []);

  const fetchList = () => (
    <div className="quiz-list__items">
      {quizes.map((quiz, index) => (
        <QuizListItem
          quiz={quiz}
          index={index}
          deleteQuizById={deleteQuizById}
          key={quiz.id}
        />
      ))}
    </div>
  );

  return (
    <div>
      <div className="quiz-list">
        <div className="quiz-list__title">Quiz List</div>

        {loading && quizes.length !== 0 ? <Preloader /> : fetchList()}
      </div>
    </div>
  );
};

export default QuizListPage;
