import { useEffect } from "react";
import ActiveQuiz from "../components/Quiz/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../components/Quiz/FinishedQuiz";
import Preloader from "../components/UI/Preloader";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";
import { useParams, useNavigate } from "react-router-dom";

const QuizPage = () => {
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
    <div>
      {loading || !quiz ? (
        <Preloader />
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
          navigate={navigate}
        />
      )}
    </div>
  );
};

export default QuizPage;
