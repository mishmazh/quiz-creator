import { useEffect } from "react";
import classes from "./Quiz.module.scss";
import ActiveQuiz from "./ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "./FinishedQuiz/FinishedQuiz";
import Loader from "../UI/Loader/Loader";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import { useParams, useNavigate } from "react-router-dom";

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

  const navigateToStart = () => navigate("/quiz-creator");

  return (
    <div className={classes.quiz}>
      <div className={classes.quizForm}>
        <h1 className={classes.title}>Ответьте на все вопросы</h1>

        {loading || !quiz ? (
          <Loader />
        ) : isFinished ? (
          <FinishedQuiz
            results={results}
            quiz={quiz}
            retryHandler={retryQuiz}
            redirectHandler={navigateToStart}
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
