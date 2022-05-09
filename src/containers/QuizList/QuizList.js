import classes from "./QuizList.module.scss";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";

const QuizList = () => {
  const { quizes, loading } = useSelector((state) => state.quiz);
  const { fetchQuizes } = useActions();

  useEffect(() => fetchQuizes(), []);

  const renderQuizes = () => {
    return quizes.map((quiz) => {
      return (
        <li key={quiz.id}>
          <NavLink to={"/quiz/" + quiz.id}>{quiz.name}</NavLink>
        </li>
      );
    });
  };

  return (
    <div className={classes.QuizList}>
      <div>
        <h1>Список тестов</h1>

        {loading && quizes.length !== 0 ? (
          <Loader />
        ) : (
          <ul>{renderQuizes()} </ul>
        )}
      </div>
    </div>
  );
};

export default QuizList;
