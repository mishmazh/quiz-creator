import { CREATE_QUIZ_QUESTION, RESET_QUIZ_CREATION } from "./types";
import axios from "../../axios/axios-quiz";

export const createQuizQuestion = (item) => ({
  type: CREATE_QUIZ_QUESTION,
  item,
});

export const finishCreateQuiz = () => {
  return async (dispatch, getState) => {
    await axios.post("/quizes.json", getState().create.quiz);
    dispatch(resetQuizCreation());
  };
};

export const resetQuizCreation = () => ({
  type: RESET_QUIZ_CREATION,
});
