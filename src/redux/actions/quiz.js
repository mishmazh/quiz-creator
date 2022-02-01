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
} from "./actionTypes";

// ---------- FETCH QUIZ-LIST ---------- //
export function fetchQuizes() {
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
}

// ---------- QUIZ ---------- //
export function fetchQuizById(quizId) {
  return async (dispatch) => {
    dispatch(fetchQuizesStart());

    try {
      const response = await axios.get(`/quizes/${quizId}.json`);
      const quiz = response.data;

      dispatch(fetchQuizSuccess(quiz));
    } catch (e) {
      dispatch(fetchQuizesError(e));
    }
  };
}

export function quizAnswerClick(answerId) {
  return (dispatch, getState) => {
    try {
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

      const timeout = window.setTimeout(() => {
        if (isQuizFinished(state)) {
          dispatch(finishQuiz());
        } else {
          dispatch(quizNextQuestion(state.activeQuestion + 1));
        }

        window.clearTimeout(timeout);
      }, 450);
    } catch (e) {
      dispatch(fetchQuizesError(e));
    }
  };
}

// ---------- FETCH QUIZ-LIST ACTIONS ---------- //
export function fetchQuizesStart() {
  return {
    type: FETCH_QUIZES_START,
  };
}

export function fetchQuizesSuccess(quizes) {
  return {
    type: FETCH_QUIZES_SUCCESS,
    quizes,
  };
}

export function fetchQuizesError(e) {
  return {
    type: FETCH_QUIZES_ERROR,
    error: e,
  };
}

// ---------- FETCH QUIZ ACTIONS ---------- //
export function fetchQuizSuccess(quiz) {
  return {
    type: FETCH_QUIZ_SUCCESS,
    quiz,
  };
}

export function quizSetState(answerState, results) {
  return {
    type: QUIZ_SET_STATE,
    answerState,
    results,
  };
}

export function finishQuiz() {
  return {
    type: FINISH_QUIZ,
  };
}

export function quizNextQuestion(number) {
  return {
    type: QUIZ_NEXT_QUESTION,
    number,
  };
}

function isQuizFinished(state) {
  return state.activeQuestion + 1 === state.quiz.length;
}

export function retryQuiz() {
  return {
    type: QUIZ_RETRY,
  };
}
