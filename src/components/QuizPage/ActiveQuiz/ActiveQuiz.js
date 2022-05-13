import classes from "./ActiveQuiz.module.scss";
import AnswerItem from "./AnswerItem/AnswerItem";

const ActiveQuiz = ({
  answerNumber,
  question,
  quizLength,
  answers,
  onAnswerClickHandler,
  answerState,
}) => {
  return (
    <div className={classes.activeQuiz}>
      <div className={classes.questionBlock}>
        <div className={classes.question}>
          <strong>{answerNumber}.</strong>&nbsp; {question}
        </div>
        <div className={classes.answerLength}>
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
  );
};

export default ActiveQuiz;
