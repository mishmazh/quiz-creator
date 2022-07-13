import { useEffect } from "react";
import Loader from "../components/UI/Loader/Loader";
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
    <div className="list-block">
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
      <div className="quiz-list-form">
        <div className="quiz-list-form__title">Quiz List</div>

        {loading && quizes.length !== 0 ? <Loader /> : fetchList()}
      </div>
    </div>
  );
};

export default QuizListPage;
