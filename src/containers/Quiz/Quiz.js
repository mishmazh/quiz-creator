import React from "react";
import classes from "./Quiz.module.scss";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import Loader from "../../components/UI/Loader/Loader";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchQuizById,
  quizAnswerClick,
  retryQuiz,
} from "../../redux/actions/quiz";

class Quiz extends React.Component {
  componentDidMount() {
    const { id } = this.props.params;
    this.props.fetchQuizById(id);
  }
  componentWillUnmount() {
    this.props.retryQuiz();
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div>
          <h1 className={classes.Title}>Ответьте на все вопросы</h1>

          {this.props.loading || !this.props.quiz ? (
            <Loader />
          ) : this.props.isFinished ? (
            <FinishedQuiz
              results={this.props.results}
              quiz={this.props.quiz}
              onRetry={this.props.retryQuiz}
            />
          ) : (
            <ActiveQuiz
              question={this.props.quiz[this.props.activeQuestion].question}
              answers={this.props.quiz[this.props.activeQuestion].answers}
              quizLength={this.props.quiz.length}
              answerNumber={this.props.activeQuestion + 1}
              onAnswerClick={this.props.quizAnswerClick}
              answerState={this.props.answerState}
            />
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    results: state.quiz.results,
    answerState: state.quiz.answerState,
    activeQuestion: state.quiz.activeQuestion,
    isFinished: state.quiz.isFinished,
    quiz: state.quiz.quiz,
    loading: state.quiz.loading,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchQuizById: (id) => dispatch(fetchQuizById(id)),
    quizAnswerClick: (answerId) => dispatch(quizAnswerClick(answerId)),
    retryQuiz: () => dispatch(retryQuiz()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)((props) => <Quiz {...props} params={useParams()} />);
