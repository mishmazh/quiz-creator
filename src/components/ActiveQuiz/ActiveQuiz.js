import AnswersList from "./AnswersList/AnswersList";
import styles from "./ActiveQuiz.module.scss";

const ActiveQuiz = ({answerNumber, question, quizLength, answers, onAnswerClick, answerState}) => {
  return (
    <div className={styles.activeQuiz}>
      <div className={styles.questionBlock}>
        <div>
          <strong>{answerNumber}.</strong>&nbsp; {question}
        </div>
        <small>
          {answerNumber} из {quizLength}
        </small>
      </div>

      <AnswersList
        answers={answers}
        onAnswerClick={onAnswerClick}
        answerState={answerState}
      />
    </div>
  );
};

export default ActiveQuiz;
