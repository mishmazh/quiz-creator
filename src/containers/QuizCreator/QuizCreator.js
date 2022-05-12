import classes from "./QuizCreator.module.scss";
import React, { useState } from "react";
import Input from "../../components/UI/Input/Input";
import Select from "../../components/UI/Select/Select";
import Button from "../../components/UI/Button/Button";
import // createControl,
// validate,
// validateForm,
"../../helpers/validations";
import { connect, useSelector } from "react-redux";
import {
  createQuizQuestion,
  finishCreateQuiz,
} from "../../redux/actions/create";
import { useActions } from "../../hooks/useActions";

const createOptionControl = (number) => ({
  label: `Вариант ${number}`,
  value: "",
  id: number,
});

const createFormControls = () => ({
  question: {
    label: "Введите вопрос",
    value: "",
  },
  option1: createOptionControl(1),
  option2: createOptionControl(2),
  option3: createOptionControl(3),
  option4: createOptionControl(4),
});

const QuizCreator = () => {
  const [state, setState] = useState({
    rightAnswerId: 1,
    formControls: createFormControls(),
  });
  // const [rightAnswer, setRightAnswer] = useState(1)
  const { quiz } = useSelector((state) => state.create);
  const { createQuizQuestion, finishCreateQuiz } = useActions();

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const onChangeHandler = (value, controlName) => {
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
            label={control.label}
            value={control.value}
            placeholder={
              index === 0 ? "Введите вопрос..." : "Введите вариант ответа..."
            }
            onChange={(event) =>
              onChangeHandler(event.target.value, controlName)
            }
          />
          {index === 0 ? <hr /> : null}
        </div>
      );
    });

  const addQuestionHandler = (event) => {
    event.preventDefault();

    const { question, option1, option2, option3, option4 } = state.formControls;

    const questionItem = {
      question: question.value,
      rightAnswerId: state.rightAnswerId,
      // rightAnswerId: rightAnswer,
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

  const selectOnChangeHandler = (event) => {
    setState({ ...state, rightAnswerId: +event.target.value });
  };

  const renderSelect = (
    <Select
      label="Выберите правильный ответ"
      value={state.rightAnswerId}
      //   value={rightAnswer}
      onChange={selectOnChangeHandler}
      options={[
        { text: 1, value: 1 },
        { text: 2, value: 2 },
        { text: 3, value: 3 },
        { text: 4, value: 4 },
      ]}
    />
  );

  return (
    <div className={classes.quizCreator}>
      <div className={classes.title}>Создание теста</div>

      <form className={classes.quizCreatorForm} onSubmit={submitHandler}>
        {renderControls()}
        {renderSelect}

        <Button classType="primary" onClick={addQuestionHandler}>
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

// const createOptionControl = (number) => ({
//   label: `Вариант ${number}`,
//   value: "",
//   id: number,
// });
//
// const createFormControls = () => ({
//   question: {
//     label: "Введите вопрос",
//     value: "",
//   },
//   option1: createOptionControl(1),
//   option2: createOptionControl(2),
//   option3: createOptionControl(3),
//   option4: createOptionControl(4),
// });
//
// class QuizCreator extends React.Component {
//   state = {
//     rightAnswerId: 1,
//     formControls: createFormControls(),
//   };
//
//   submitHandler = (event) => {
//     event.preventDefault();
//   };
//
//   onChangeHandler = (value, controlName) => {
//     const formControls = { ...this.state.formControls };
//     const control = { ...formControls[controlName] };
//
//     control.value = value;
//
//     formControls[controlName] = control;
//
//     this.setState({
//       formControls,
//     });
//   };
//
//   renderControls = () =>
//     Object.keys(this.state.formControls).map((controlName, index) => {
//       const control = this.state.formControls[controlName];
//
//       return (
//         <div key={controlName + index}>
//           <Input
//             label={control.label}
//             value={control.value}
//             placeholder={index !== 0 ? "Введите вариант ответа..." : null}
//             onChange={(event) =>
//               this.onChangeHandler(event.target.value, controlName)
//             }
//           />
//           {index === 0 ? <hr /> : null}
//         </div>
//       );
//     });
//
//   addQuestionHandler = (event) => {
//     event.preventDefault();
//
//     const { question, option1, option2, option3, option4 } =
//       this.state.formControls;
//
//     const questionItem = {
//       question: question.value,
//       rightAnswerId: this.state.rightAnswerId,
//       answers: [
//         { text: option1.value, id: option1.id },
//         { text: option2.value, id: option2.id },
//         { text: option3.value, id: option3.id },
//         { text: option4.value, id: option4.id },
//       ],
//       id: this.props.quiz.length + 1,
//     };
//
//     this.props.createQuizQuestion(questionItem);
//
//     this.setState({
//       rightAnswerId: 1,
//       formControls: createFormControls(),
//     });
//   };
//
//   createQuizHandler = (event) => {
//     event.preventDefault();
//
//     this.setState({
//       rightAnswerId: 1,
//       formControls: createFormControls(),
//     });
//
//     this.props.finishCreateQuiz();
//   };
//
//   selectOnChangeHandler = (event) => {
//     this.setState({
//       rightAnswerId: +event.target.value,
//     });
//   };
//
//   render() {
//     const select = (
//       <Select
//         label="Выберите правильный ответ"
//         value={this.state.rightAnswerId}
//         onChange={this.selectOnChangeHandler}
//         options={[
//           { text: 1, value: 1 },
//           { text: 2, value: 2 },
//           { text: 3, value: 3 },
//           { text: 4, value: 4 },
//         ]}
//       />
//     );
//
//     return (
//       <div className={classes.quizCreator}>
//         <div className={classes.title}>Создание теста</div>
//
//         <form className={classes.quizCreatorForm} onSubmit={this.submitHandler}>
//           {this.renderControls()}
//           {select}
//
//           <Button classType="primary" onClick={this.addQuestionHandler}>
//             Добавить вопрос
//           </Button>
//           <Button
//             classType="success"
//             onClick={this.createQuizHandler}
//             disabled={this.props.quiz.length === 0}
//           >
//             Создать тест
//           </Button>
//         </form>
//       </div>
//     );
//   }
// }
//
// function mapStateToProps(state) {
//   return {
//     quiz: state.create.quiz,
//   };
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     createQuizQuestion: (item) => dispatch(createQuizQuestion(item)),
//     finishCreateQuiz: () => dispatch(finishCreateQuiz()),
//   };
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(QuizCreator);

// const createOptionControl = (number) => {
//   return createControl(
//     {
//       label: `Вариант ${number}`,
//       errorMessage: "Значение не может быть пустым",
//       id: number,
//     },
//     { required: true }
//   );
// };

// const createFormControls = () => {
//   return {
//     question: createControl(
//       {
//         label: "Введите вопрос",
//         errorMessage: "Вопрос не может быть пустым",
//       },
//       { required: true }
//     ),
//     option1: createOptionControl(1),
//     option2: createOptionControl(2),
//     option3: createOptionControl(3),
//     option4: createOptionControl(4),
//   };
// };

// class QuizCreator extends React.Component {
//   state = {
//     isFormValid: false,
//     rightAnswerId: 1,
//     formControls: createFormControls(),
//   };

//   submitHandler = (event) => {
//     event.preventDefault();
//   };

//   changeHandler = (value, controlName) => {
//     const formControls = { ...this.state.formControls };
//     const control = { ...formControls[controlName] };

//     control.value = value;
//     control.touched = true;
//     control.valid = validate(control.value, control.validation);

//     formControls[controlName] = control;

//     this.setState({
//       formControls,
//       isFormValid: validateForm(formControls),
//     });
//   };

//   renderControls() {
//     return Object.keys(this.state.formControls).map((controlName, index) => {
//       const control = this.state.formControls[controlName];
//       return (
//         <div key={controlName + index}>
//           <Input
//             label={control.label}
//             value={control.value}
//             valid={control.valid}
//             shouldValidate={!!control.validation}
//             touched={control.touched}
//             errorMessage={control.errorMessage}
//             onChange={(event) =>
//               this.changeHandler(event.target.value, controlName)
//             }
//           />
//           {index === 0 ? <hr /> : null}
//         </div>
//       );
//     });
//   }

//   addQuestionHandler = (event) => {
//     event.preventDefault();

//     const { question, option1, option2, option3, option4 } =
//       this.state.formControls;

//     const questionItem = {
//       question: question.value,
//       rightAnswerId: this.state.rightAnswerId,
//       answers: [
//         { text: option1.value, id: option1.id },
//         { text: option2.value, id: option2.id },
//         { text: option3.value, id: option3.id },
//         { text: option4.value, id: option4.id },
//       ],
//       id: this.props.quiz.length + 1,
//     };

//     this.props.createQuizQuestion(questionItem);

//     this.setState({
//       isFormValid: false,
//       rightAnswerId: 1,
//       formControls: createFormControls(),
//     });
//   };

//   createQuizHandler = (event) => {
//     event.preventDefault();

//     this.setState({
//       isFormValid: false,
//       rightAnswerId: 1,
//       formControls: createFormControls(),
//     });

//     this.props.finishCreateQuiz();
//   };

//   selectChangeHandler = (event) => {
//     this.setState({
//       rightAnswerId: +event.target.value,
//     });
//   };

//   render() {
//     const select = (
//       <Select
//         label="Выберите правильный ответ"
//         value={this.state.rightAnswerId}
//         onChange={this.selectChangeHandler}
//         options={[
//           { text: 1, value: 1 },
//           { text: 2, value: 2 },
//           { text: 3, value: 3 },
//           { text: 4, value: 4 },
//         ]}
//       />
//     );

//     return (
//       <div className={classes.quizCreator}>
//         <div className={classes.title}>Создание теста</div>

//         <form className={classes.quizCreatorForm} onSubmit={this.submitHandler}>
//           {this.renderControls()}
//           {select}

//           <Button
//             classType="primary"
//             onClick={this.addQuestionHandler}
//             disabled={!this.state.isFormValid}
//           >
//             Добавить вопрос
//           </Button>
//           <Button
//             classType="success"
//             onClick={this.createQuizHandler}
//             disabled={this.props.quiz.length === 0}
//           >
//             Создать тест
//           </Button>
//         </form>
//       </div>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     quiz: state.create.quiz,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     createQuizQuestion: (item) => dispatch(createQuizQuestion(item)),
//     finishCreateQuiz: () => dispatch(finishCreateQuiz()),
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(QuizCreator);
