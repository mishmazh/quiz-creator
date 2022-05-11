import classes from "./QuizCreator.module.scss";
import React, { useState } from "react";
import Input from "../../components/UI/Input/Input";
import Select from "../../components/UI/Select/Select";
import Button from "../../components/UI/Button/Button";
import {
  createControl,
  validate,
  validateForm,
} from "../../helpers/validations";
import { connect, useSelector } from "react-redux";
import {
  createQuizQuestion,
  finishCreateQuiz,
} from "../../redux/actions/create";
import { useActions } from "../../hooks/useActions";

const createOptionControl = (number) => {
  return createControl(
    {
      label: `Вариант ${number}`,
      errorMessage: "Значение не может быть пустым",
      id: number,
    },
    { required: true }
  );
};

const createFormControls = () => {
  return {
    question: createControl(
      {
        label: "Введите вопрос",
        errorMessage: "Вопрос не может быть пустым",
      },
      { required: true }
    ),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4),
  };
};

class QuizCreator extends React.Component {
  state = {
    isFormValid: false,
    rightAnswerId: 1,
    formControls: createFormControls(),
  };

  submitHandler = (event) => {
    event.preventDefault();
  };

  changeHandler = (value, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.value = value;
    control.touched = true;
    control.valid = validate(control.value, control.validation);

    formControls[controlName] = control;

    this.setState({
      formControls,
      isFormValid: validateForm(formControls),
    });
  };

  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <div key={controlName + index}>
          <Input
            label={control.label}
            value={control.value}
            valid={control.valid}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={(event) =>
              this.changeHandler(event.target.value, controlName)
            }
          />
          {index === 0 ? <hr /> : null}
        </div>
      );
    });
  }

  addQuestionHandler = (event) => {
    event.preventDefault();

    const { question, option1, option2, option3, option4 } =
      this.state.formControls;

    const questionItem = {
      question: question.value,
      rightAnswerId: this.state.rightAnswerId,
      answers: [
        { text: option1.value, id: option1.id },
        { text: option2.value, id: option2.id },
        { text: option3.value, id: option3.id },
        { text: option4.value, id: option4.id },
      ],
      id: this.props.quiz.length + 1,
    };

    this.props.createQuizQuestion(questionItem);

    this.setState({
      isFormValid: false,
      rightAnswerId: 1,
      formControls: createFormControls(),
    });
  };

  createQuizHandler = (event) => {
    event.preventDefault();

    this.setState({
      isFormValid: false,
      rightAnswerId: 1,
      formControls: createFormControls(),
    });

    this.props.finishCreateQuiz();
  };

  selectChangeHandler = (event) => {
    this.setState({
      rightAnswerId: +event.target.value,
    });
  };

  render() {
    const select = (
      <Select
        label="Выберите правильный ответ"
        value={this.state.rightAnswerId}
        onChange={this.selectChangeHandler}
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

        <form className={classes.quizCreatorForm} onSubmit={this.submitHandler}>
          {this.renderControls()}
          {select}

          <Button
            classType="primary"
            onClick={this.addQuestionHandler}
            disabled={!this.state.isFormValid}
          >
            Добавить вопрос
          </Button>
          <Button
            classType="success"
            onClick={this.createQuizHandler}
            disabled={this.props.quiz.length === 0}
          >
            Создать тест
          </Button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    quiz: state.create.quiz,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createQuizQuestion: (item) => dispatch(createQuizQuestion(item)),
    finishCreateQuiz: () => dispatch(finishCreateQuiz()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizCreator);

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
// // для обнуления формы
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

// const QuizCreator = () => {
//   const { quiz } = useSelector((state) => state.create);
//   const { createQuizQuestion, finishCreateQuiz } = useActions();

//   const [state, setState] = useState({
//     isFormValid: false,
//     rightAnswerId: 1,
//     formControls: createFormControls(),
//   });

//   const submitHandler = (e) => {
//     e.preventDefault();
//   };

//   const changeHandler = (value, controlName) => {
//     const formControls = { ...state.formControls };
//     const control = { ...formControls[controlName] };

//     control.value = value;
//     control.touched = true;
//     control.valid = validate(control.value, control.validation);

//     formControls[controlName] = control;

//     setState({
//       formControls,
//       isFormValid: validateForm(formControls),
//     });
//   };

//   const renderControls = () => {
//     return Object.keys(state.formControls).map((controlName, index) => {
//       const control = state.formControls[controlName];
//       return (
//         <div key={controlName + index}>
//           <Input
//             label={control.label}
//             value={control.value}
//             valid={control.valid}
//             shouldValidate={!!control.validation}
//             touched={control.touched}
//             errorMessage={control.errorMessage}
//             onChange={(e) => changeHandler(e.target.value, controlName)}
//           />
//           {index === 0 ? <hr /> : null}
//         </div>
//       );
//     });
//   };

//   const addQuestionHandler = (e) => {
//     e.preventDefault();

//     const { question, option1, option2, option3, option4 } = state.formControls;

//     const questionItem = {
//       question: question.value,
//       rightAnswerId: state.rightAnswerId,
//       answers: [
//         { text: option1.value, id: option1.id },
//         { text: option2.value, id: option2.id },
//         { text: option3.value, id: option3.id },
//         { text: option4.value, id: option4.id },
//       ],
//       id: quiz.length + 1,
//     };

//     createQuizQuestion(questionItem);

//     setState({
//       isFormValid: false,
//       rightAnswerId: 1,
//       formControls: createFormControls(),
//     });
//   };

//   const createQuizHandler = (e) => {
//     e.preventDefault();

//     setState({
//       isFormValid: false,
//       rightAnswerId: 1,
//       formControls: createFormControls(),
//     });

//     finishCreateQuiz();
//   };

//   const selectChangeHandler = (e) => {
//     setState({
//       rightAnswerId: +e.target.value,
//     });
//   };

//   const select = (
//     <Select
//       label="Выберите правильный ответ"
//       value={state.rightAnswerId}
//       onChange={selectChangeHandler}
//       options={[
//         { text: 1, value: 1 },
//         { text: 2, value: 2 },
//         { text: 3, value: 3 },
//         { text: 4, value: 4 },
//       ]}
//     />
//   );

//   return (
//     <div className={classes.QuizCreator}>
//       <div>
//         <h1>Создание теста</h1>

//         <form onSubmit={submitHandler}>
//           {renderControls()}
//           {select}

//           <Button
//             type="Primary"
//             onClick={addQuestionHandler}
//             disabled={!state.isFormValid}
//           >
//             Добавить вопрос
//           </Button>
//           <Button
//             type="Success"
//             onClick={createQuizHandler}
//             disabled={quiz.length === 0}
//           >
//             Создать тест
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default QuizCreator;
