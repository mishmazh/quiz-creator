import { NavLink } from "react-router-dom";
import Icon from "../UI/Icon";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const QuizListItem = ({ quiz, index, deleteQuizById }) => {
  return (
    <div className="quiz-list-item">
      <NavLink className="quiz-list-item__number" to={"/quiz/" + quiz.id}>
        {quiz.name}
      </NavLink>
      {index > 2 && (
        <Icon icon={faTrashCan} onClick={() => deleteQuizById(quiz.id)} />
      )}
    </div>
  );
};

export default QuizListItem;
