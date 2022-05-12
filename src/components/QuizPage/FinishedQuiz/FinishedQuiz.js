import classes from "./FinishedQuiz.module.scss";
import Button from "../../UI/Button/Button";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import Icon from "../../UI/Icon/Icon";

const FinishedQuiz = ({ results, quiz, retryHandler, redirectHandler }) => {
  const successCount = Object.keys(results).reduce((total, key) => {
    if (results[key] === "success") {
      total++;
    }

    return total;
  }, 0);

  return (
    <div className={classes.finishedQuiz}>
      <div className={classes.title}>Результаты:</div>
      <ul>
        {quiz.map((quizItem, index) => (
          <li className={classes.resultsList} key={index}>
            {index + 1}.&nbsp; {quizItem.question}
            <Icon
              classType="quizIcon"
              icon={results[quizItem.id] === "wrong" ? faTimes : faCheck}
            />
          </li>
        ))}
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
