import AnswersList from "./AnswersList/AnswersList";
import styles from "./ActiveQuiz.module.scss";

const ActiveQuiz = (props) => {
  return (
    <div className={styles.ActiveQuiz}>
      <p className={styles.Question}>
        <span>
          <strong>{props.answerNumber}.</strong>&nbsp; {props.question}
        </span>
        <small>
          {props.answerNumber} из {props.quizLength}
        </small>
      </p>

      <AnswersList
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
        answerState={props.answerState}
      />
    </div>
  );
};

export default ActiveQuiz;
