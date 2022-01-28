import React from "react";
import classes from "./Quiz.module.scss";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import axios from "../../axios/axios-quiz";
import Loader from "../../components/UI/Loader/Loader";
import { useParams } from "react-router-dom";

class Quiz extends React.Component {
  state = {
    results: {},
    answerState: null, // информация о текущем клике пользователя
    activeQuestion: 0,
    isFinished: false,
    loading: true,
    quiz: [],
  };

  onAnswerClickHandler = (answerId) => {
    const question = this.state.quiz[this.state.activeQuestion];
    const results = this.state.results;

    if (this.state.answerState) {
      // забираем нулевое значение, потому что в объекте всегда будет только один элемент
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key]) {
        return;
      }
    }

    if (question.rightAnswerId === answerId) {
      // если по id в results ничего нет, добавляет "success"
      if (!results[question.id]) {
        results[question.id] = "success";
      }

      this.setState({
        answerState: { [answerId]: "success" },
        results,
      });
    } else {
      results[question.id] = "wrong";

      this.setState({
        answerState: { [answerId]: "wrong" },
        results,
      });
    }

    const timeout = window.setTimeout(() => {
      if (this.isQuizFinished()) {
        this.setState({
          isFinished: true,
        });
      } else {
        this.setState({
          activeQuestion: this.state.activeQuestion + 1,
          answerState: null,
        });
      }

      window.clearTimeout(timeout);
    }, 450);
  };

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  retryHandler = () => {
    this.setState({
      results: {},
      activeQuestion: 0,
      isFinished: false,
      answerState: null,
    });
  };

  async componentDidMount() {
    const { id } = this.props.params;

    try {
      const response = await axios.get(`/quizes/${id}.json`);
      const quiz = response.data;

      this.setState({
        quiz,
        loading: false,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div>
          <h1 className={classes.Title}>Ответьте на все вопросы</h1>

          {this.state.loading ? (
            <Loader />
          ) : this.state.isFinished ? (
            <FinishedQuiz
              results={this.state.results}
              quiz={this.state.quiz}
              onRetry={this.retryHandler}
            />
          ) : (
            <ActiveQuiz
              question={this.state.quiz[this.state.activeQuestion].question}
              answers={this.state.quiz[this.state.activeQuestion].answers}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              onAnswerClick={this.onAnswerClickHandler}
              answerState={this.state.answerState}
            />
          )}
        </div>
      </div>
    );
  }
}

export default (props) => <Quiz {...props} params={useParams()} />;
