import classes from "./FinishedQuiz.module.scss";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";

const FinishedQuiz = (props) => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === "success") {
      total++;
    }
    return total;
  }, 0);

  return (
    <div className={classes.FinishedQuiz}>
      <h1>Результаты:</h1>
      <ul>
        {props.quiz.map((quizItem, index) => {
          const cls = [
            "fa",
            props.results[quizItem.id] === "wrong" ? "fa-times" : "fa-check",
            classes[props.results[quizItem.id]],
          ];

          return (
            <li key={index}>
              <strong>{index + 1}</strong>.&nbsp; {quizItem.question}
              <i className={cls.join(" ")} />
            </li>
          );
        })}
      </ul>

      <p>
        Правильных ответов: {successCount} из {props.quiz.length}
      </p>

      <Button type="Primary" onClick={props.onRetry}>
        Повторить
      </Button>
      <Link to="/">
        <Button type="Success">Вернуться на домашнюю страницу</Button>
      </Link>
    </div>
  );
};

export default FinishedQuiz;
