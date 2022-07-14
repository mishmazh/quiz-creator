const ActiveQuizItem = ({ answerState, onAnswerClickHandler, answer }) => {
  const cls = ["active-quiz-item"];

  if (answerState) {
    cls.push(answerState);
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

export default ActiveQuizItem;
