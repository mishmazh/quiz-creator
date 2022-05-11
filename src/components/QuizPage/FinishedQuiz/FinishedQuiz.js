import classes from "./FinishedQuiz.module.scss";
import Button from "../../UI/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

const FinishedQuiz = ({ results, quiz, retryHandler, redirectHandler }) => {
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
            </li>
          );
        })}
      </ul>

      <div className={classes.successCount}>
        Правильных ответов: {successCount} из {quiz.length}
      </div>

      <Button classType="primary" onClick={retryHandler}>
        Повторить
      </Button>
      <Button classType="success" onClick={redirectHandler}>
        Вернуться на домашнюю страницу
      </Button>
    </div>
  );
};

export default FinishedQuiz;
