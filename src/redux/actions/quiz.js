import axios from "../../axios/axios-quiz";
import {
  FETCH_QUIZ_SUCCESS,
  FETCH_QUIZES_ERROR,
  FETCH_QUIZES_START,
  FETCH_QUIZES_SUCCESS,
  QUIZ_SET_STATE,
  FINISH_QUIZ,
  QUIZ_NEXT_QUESTION,
  QUIZ_RETRY,
} from "./types";

// ---------- FETCH QUIZ-LIST ---------- //
export const fetchQuizes = () => {
  return async (dispatch) => {
    dispatch(fetchQuizesStart());

    try {
      const response = await axios.get("/quizes.json");

      const quizes = [];

      Object.keys(response.data).forEach((key, index) => {
        quizes.push({ id: key, name: `Тест №${index + 1}` });
      });

      dispatch(fetchQuizesSuccess(quizes));
    } catch (e) {
      dispatch(fetchQuizesError(e));
    }
  };
};

// ---------- QUIZ ---------- //
export const fetchQuizById = (quizId) => {
  return async (dispatch) => {
    dispatch(fetchQuizesStart());

    try {
      const response = await axios.get(`/quizes/${quizId}.json`);
      const quiz = response.data;

      dispatch(fetchQuizSuccess(quiz));
    } catch (err) {
      dispatch(fetchQuizesError(err));
    }
  };
};

export const quizAnswerClick = (answerId) => {
  return (dispatch, getState) => {
    const state = getState().quiz;

    if (state.answerState) {
      // забираем нулевое значение, потому что в объекте всегда будет только один элемент
      const key = Object.keys(state.answerState)[0];
      if (state.answerState[key]) {
        return;
      }
    }

    const question = state.quiz[state.activeQuestion];
    const results = state.results;

    if (question.rightAnswerId === answerId) {
      // если по id в results ничего нет, добавляет "success"
      if (!results[question.id]) {
        results[question.id] = "success";
      }

      dispatch(quizSetState({ [answerId]: "success" }, results));
    } else {
      results[question.id] = "wrong";

      dispatch(quizSetState({ [answerId]: "wrong" }, results));
    }

    setTimeout(() => {
      if (isQuizFinished(state)) {
        dispatch(finishQuiz());
      } else {
        dispatch(quizNextQuestion(state.activeQuestion + 1));
      }
    }, 450);
  };
};

const isQuizFinished = (state) =>
  state.activeQuestion + 1 === state.quiz.length;

// ---------- FETCH QUIZ-LIST ACTIONS ---------- //
export const fetchQuizesStart = () => ({
  type: FETCH_QUIZES_START,
});

export const fetchQuizesSuccess = (quizes) => ({
  type: FETCH_QUIZES_SUCCESS,
  quizes,
});

export const fetchQuizesError = (error) => ({
  type: FETCH_QUIZES_ERROR,
  error,
});

// ---------- FETCH QUIZ ACTIONS ---------- //
export const fetchQuizSuccess = (quiz) => ({
  type: FETCH_QUIZ_SUCCESS,
  quiz,
});

export const quizSetState = (answerState, results) => ({
  type: QUIZ_SET_STATE,
  answerState,
  results,
});

export const finishQuiz = () => ({ type: FINISH_QUIZ });

export const quizNextQuestion = (number) => ({
  type: QUIZ_NEXT_QUESTION,
  number,
});

export const retryQuiz = () => ({
  type: QUIZ_RETRY,
});
