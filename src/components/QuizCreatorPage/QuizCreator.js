import classes from "./QuizCreator.module.scss";
import React, { useState } from "react";
import Input from "../../components/UI/Input/Input";
import Select from "../../components/UI/Select/Select";
import Button from "../../components/UI/Button/Button";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import {
  createQuizBtnDisabled,
  createFormControls,
} from "../../helpers/createQuizHelpers";
import Delimiter from "../../components/UI/Delimiter/Delimiter";

const QuizCreator = () => {
  const [state, setState] = useState({
    rightAnswerId: 1,
    formControls: createFormControls(),
  });
  const { quiz } = useSelector((state) => state.create);
  const { createQuizQuestion, finishCreateQuiz } = useActions();

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const controlOnChangeHandler = (value, controlName) => {
    const formControls = { ...state.formControls };
    const control = { ...formControls[controlName] };

    control.value = value;

    formControls[controlName] = control;

    setState({
      ...state,
      formControls,
    });
  };

  const renderControls = () =>
    Object.keys(state.formControls).map((controlName, index) => {
      const control = state.formControls[controlName];

      return (
        <div key={controlName + index}>
          <Input
            type="text"
            label={control.label}
            value={control.value}
            placeholder={
              index === 0 ? "Введите вопрос..." : "Введите вариант ответа..."
            }
            onChange={(event) =>
              controlOnChangeHandler(event.target.value, controlName)
            }
          />
          {index === 0 && <Delimiter width="50" />}
        </div>
      );
    });

  const selectOnChangeHandler = (event) => {
    setState({ ...state, rightAnswerId: +event.target.value });
  };

  const renderSelect = (
    <Select
      label="Выберите правильный ответ"
      value={state.rightAnswerId}
      onChange={selectOnChangeHandler}
      options={[
        { text: 1, value: 1 },
        { text: 2, value: 2 },
        { text: 3, value: 3 },
        { text: 4, value: 4 },
      ]}
    />
  );

  const addQuestionHandler = (event) => {
    event.preventDefault();

    const { question, option1, option2, option3, option4 } = state.formControls;

    const questionItem = {
      question: question.value,
      rightAnswerId: state.rightAnswerId,
      answers: [
        { text: option1.value, id: option1.id },
        { text: option2.value, id: option2.id },
        { text: option3.value, id: option3.id },
        { text: option4.value, id: option4.id },
      ],
      id: quiz.length + 1,
    };

    createQuizQuestion(questionItem);

    setState({
      rightAnswerId: 1,
      formControls: createFormControls(),
    });
  };

  const createQuizHandler = (event) => {
    event.preventDefault();

    setState({
      rightAnswerId: 1,
      formControls: createFormControls(),
    });

    finishCreateQuiz();
  };

  return (
    <div className={classes.quizCreator}>
      <div className={classes.title}>Создание теста</div>

      <form className={classes.quizCreatorForm} onSubmit={submitHandler}>
        {renderControls()}
        {renderSelect}

        <Button
          classType="primary"
          onClick={addQuestionHandler}
          disabled={!createQuizBtnDisabled(state.formControls)}
        >
          Добавить вопрос
        </Button>
        <Button
          classType="success"
          onClick={createQuizHandler}
          disabled={quiz.length === 0}
        >
          Создать тест
        </Button>
      </form>
    </div>
  );
};

export default QuizCreator;
