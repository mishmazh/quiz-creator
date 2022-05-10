import classes from "./FinishedQuiz.module.scss";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

const FinishedQuiz = ({ results, quiz, onRetry }) => {
  const successCount = Object.keys(results).reduce((total, key) => {
    if (results[key] === "success") {
      total++;
    }

    return total;
  }, 0);

  return (
    <div className={classes.FinishedQuiz}>
      <div className={classes.title}>Результаты:</div>
      <ul>
        {quiz.map((quizItem, index) => {
          const cls = [
            results[quizItem.id] === "wrong" ? { faTimes } : { faCheck },
            classes[results[quizItem.id]],
          ];

          return (
            <li key={index}>
              <strong>{index + 1}</strong>.&nbsp; {quizItem.question}
              <FontAwesomeIcon icon={cls.join(" ")} />
              {/* <i className={cls.join(" ")} /> */}
            </li>
          );
        })}
      </ul>

      <div className={classes.successCount}>
        Правильных ответов: {successCount} из {quiz.length}
      </div>

      <Button classType="primary" onClick={onRetry}>
        Повторить
      </Button>
      <Link to="/">
        <Button classType="success">Вернуться на домашнюю страницу</Button>
      </Link>
    </div>
  );
};

export default FinishedQuiz;
