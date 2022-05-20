import s from "./FinishedQuiz.module.scss";
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
    <div className={s.finishedQuiz}>
      <div className={s.title}>Results:</div>
      <ul>
        {quiz.map((quizItem, index) => (
          <li className={s.resultsList} key={index}>
            {index + 1}.&nbsp; {quizItem.question}
            <Icon
              classType="quizIcon"
              icon={results[quizItem.id] === "wrong" ? faTimes : faCheck}
            />
          </li>
        ))}
      </ul>

      <div className={s.successCount}>
        Right answers:{" "}
        <strong>
          {successCount} of {quiz.length}
        </strong>
      </div>

      <Button classType="primary" onClick={retryHandler}>
        Try again
      </Button>
      <Button classType="success" onClick={redirectHandler}>
        Back to creation
      </Button>
    </div>
  );
};

export default FinishedQuiz;
