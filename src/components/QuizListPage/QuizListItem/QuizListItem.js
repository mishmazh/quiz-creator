import { NavLink } from "react-router-dom";
import classes from "./QuizListItem.module.scss";

const QuizListItem = ({ quiz }) => (
  <NavLink className={classes.quizListItem} to={"/quiz/" + quiz.id}>
    {quiz.name}
  </NavLink>
);

export default QuizListItem;
