import { useEffect } from "react";
import s from "./Quiz.module.scss";
import ActiveQuiz from "./ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "./FinishedQuiz/FinishedQuiz";
import Loader from "../UI/Loader/Loader";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import { useParams, useNavigate } from "react-router-dom";
import Icon from "../UI/Icon/Icon";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";

const Quiz = () => {
  const { results, answerState, activeQuestion, isFinished, quiz, loading } =
    useSelector((state) => state.quiz);
  const { fetchQuizById, retryQuiz, quizAnswerClick } = useActions();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchQuizById(id);

    return () => retryQuiz();
  }, []);

  const navigateToQuizCreator = () => navigate("/quiz-creator");

  return (
    <div className={s.quiz}>
      <div className={s.quizForm}>
        <div className={s.titleBlock}>
          <h1 className={s.title}>Answer the questions</h1>
          <Icon icon={faAnglesLeft} onClick={() => navigate("/quiz-list")} />
        </div>

        {loading || !quiz ? (
          <Loader />
        ) : isFinished ? (
          <FinishedQuiz
            results={results}
            quiz={quiz}
            retryHandler={retryQuiz}
            redirectHandler={navigateToQuizCreator}
          />
        ) : (
          <ActiveQuiz
            question={quiz[activeQuestion].question}
            answers={quiz[activeQuestion].answers}
            quizLength={quiz.length}
            answerNumber={activeQuestion + 1}
            onAnswerClickHandler={quizAnswerClick}
            answerState={answerState}
          />
        )}
      </div>
    </div>
  );
};

export default Quiz;
