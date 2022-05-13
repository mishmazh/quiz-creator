import { CREATE_QUIZ_QUESTION, RESET_QUIZ_CREATION } from "./types";
import api from "../../api/api";

export const createQuizQuestion = (item) => ({
  type: CREATE_QUIZ_QUESTION,
  item,
});

export const finishCreateQuiz = () => {
  return async (dispatch, getState) => {
    await api.post("/quizes.json", getState().create.quiz);

    dispatch(resetQuizCreation());
  };
};

export const resetQuizCreation = () => ({
  type: RESET_QUIZ_CREATION,
});
