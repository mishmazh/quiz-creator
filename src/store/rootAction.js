import * as AuthActionCreators from "./actions/auth";
import * as CreateQuizActionCreators from "./actions/create";
import * as QuizActionCreators from "./actions/quiz";

export default {
  ...AuthActionCreators,
  ...CreateQuizActionCreators,
  ...QuizActionCreators,
};
