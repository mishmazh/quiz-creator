import AnswerItem from "./AnswerItem/AnswerItem";
import styles from "./AnswersList.module.scss";
const AnswersList = (props) => {
  return (
    <ul className={styles.AnswersList}>
      {props.answers.map((answer, index) => {
        return (
          <AnswerItem
            key={index}
            answer={answer}
            onAnswerClick={props.onAnswerClick}
            answerState={
              props.answerState ? props.answerState[answer.id] : null
            }
          />
        );
      })}
    </ul>
  );
};

export default AnswersList;
