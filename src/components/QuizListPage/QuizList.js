import classes from "./QuizList.module.scss";
import { useEffect } from "react";
import Loader from "../UI/Loader/Loader";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import QuizListItem from "./QuizListItem/QuizListItem";

const QuizList = () => {
  const { quizes, loading } = useSelector((state) => state.quiz);
  const { fetchQuizes } = useActions();

  useEffect(() => fetchQuizes(), []);

  const fetchList = () => (
    <div className={classes.list}>
      {quizes.map((quiz, index) => (
        <QuizListItem quiz={quiz} key={index} />
      ))}
    </div>
  );

  return (
    <div className={classes.quizList}>
      <div className={classes.quizListForm}>
        <div className={classes.title}>Список тестов</div>

        {loading && quizes.length !== 0 ? <Loader /> : fetchList()}
      </div>
    </div>
  );
};

export default QuizList;
