import classes from "./QuizList.module.scss";
import { useEffect } from "react";
import Loader from "../UI/Loader/Loader";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import QuizListItem from "./QuizListItem/QuizListItem";
import Icon from "../UI/Icon/Icon";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

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
          {index > 2 && (
            <Icon icon={faTrashCan} onClick={() => deleteQuizById(quiz.id)} />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className={classes.quizList}>
      <div className={classes.quizListForm}>
        <div className={classes.title}>Quiz List</div>

        {loading && quizes.length !== 0 ? <Loader /> : fetchList()}
      </div>
    </div>
  );
};

export default QuizList;
