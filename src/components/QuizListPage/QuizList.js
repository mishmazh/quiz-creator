import classes from "./QuizList.module.scss";
import { useEffect } from "react";
import Loader from "../UI/Loader/Loader";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import QuizListItem from "./QuizListItem/QuizListItem";
import Button from "../UI/Button/Button";

const QuizList = () => {
  const { quizes, loading } = useSelector((state) => state.quiz);
  const { fetchQuizes, deleteQuizById } = useActions();

  useEffect(() => {
    fetchQuizes();
  }, []);

  const fetchList = () => (
    <div className={classes.list}>
      {quizes.map((quiz, index) => (
        <div className={classes.listItem} key={index}>
          <QuizListItem quiz={quiz} />
          <Button classType="success" onClick={() => deleteQuizById(quiz.id)}>
            Удалить
          </Button>
        </div>
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
