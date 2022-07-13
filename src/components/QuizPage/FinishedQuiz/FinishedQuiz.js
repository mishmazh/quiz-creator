import Button from "../../UI/Button";
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
    <div className="finished-quiz">
      <div className="finished-quiz__title">Results:</div>
      <ul className="finished-quiz-list">
        {quiz.map((quizItem, index) => (
          <li className="finished-quiz-list__item" key={index}>
            {index + 1}.&nbsp; {quizItem.question}
            <Icon
              classType="quizIcon"
              icon={results[quizItem.id] === "wrong" ? faTimes : faCheck}
            />
          </li>
        ))}
      </ul>

      <div className="finished-quiz__answers">
        Right answers:{" "}
        <strong>
          {successCount} of {quiz.length}
        </strong>
      </div>

      <div className="btns-block">
        <Button className="btn-primary" onClick={retryHandler}>
          Try again
        </Button>
        <Button className="btn-success" onClick={redirectHandler}>
          Back to creation
        </Button>
      </div>
    </div>
  );
};

export default FinishedQuiz;
