import classes from "./AnswerItem.module.scss";

const AnswerItem = ({answerState, onAnswerClickHandler, answer}) => {
  const cls = [classes.AnswerItem];

  if (answerState) {
    cls.push(classes[answerState]);
  }

  return (
    <li
      className={cls.join(" ")}
      onClick={() => onAnswerClickHandler(answer.id)}
    >
      {answer.text}
    </li>
  );
};

export default AnswerItem;
