import { useEffect } from "react";
import classes from "./Quiz.module.scss";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import Loader from "../../components/UI/Loader/Loader";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import { useParams } from "react-router-dom";

const Quiz = () => {
  const { results, answerState, activeQuestion, isFinished, quiz, loading } =
    useSelector((state) => state.quiz);
  const { fetchQuizById, retryQuiz, quizAnswerClick } = useActions();
  const { id } = useParams();

  useEffect(() => {
    fetchQuizById(id);

    return () => retryQuiz();
  }, []);

  return (
    <div className={classes.Quiz}>
      <div>
        <h1 className={classes.Title}>Ответьте на все вопросы</h1>

        {loading || !quiz ? (
          <Loader />
        ) : isFinished ? (
          <FinishedQuiz results={results} quiz={quiz} onRetry={retryQuiz} />
        ) : (
          <ActiveQuiz
            question={quiz[activeQuestion].question}
            answers={quiz[activeQuestion].answers}
            quizLength={quiz.length}
            answerNumber={activeQuestion + 1}
            onAnswerClick={quizAnswerClick}
            answerState={answerState}
          />
        )}
      </div>
    </div>
  );
};

export default Quiz;
