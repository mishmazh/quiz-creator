import AnswerItem from "./AnswerItem/AnswerItem";
import Icon from "../../UI/Icon/Icon";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";

const ActiveQuiz = ({
  answerNumber,
  question,
  quizLength,
  answers,
  onAnswerClickHandler,
  answerState,
  navigate,
}) => {
  return (
    <>
      <div className="title-block">
        <h1 className="title-block__name">Answer the questions</h1>
        <Icon icon={faAnglesLeft} onClick={() => navigate("/quiz-list")} />
      </div>

      <div className="active-quiz">
        <div className="question-block">
          <div className="question-block__name">
            <span className="question-block__number">{answerNumber}.</span>
            &nbsp; {question}
          </div>
          <div className="question-block__length">
            {answerNumber} из {quizLength}
          </div>
        </div>

        {answers.map((answer, index) => (
          <AnswerItem
            key={index}
            answer={answer}
            onAnswerClickHandler={onAnswerClickHandler}
            answerState={answerState ? answerState[answer.id] : null}
          />
        ))}
      </div>
    </>
  );
};

export default ActiveQuiz;
