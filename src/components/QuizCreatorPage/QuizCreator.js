// import classes from "./QuizCreator.module.scss";
// import React, { useState } from "react";
// import FormInput from "../UI/FormInput/FormInput";
// // import Select from "../UI/Select/Select";
// import Button from "../UI/Button/Button";
// import { createControl } from "../../form/formFramework";
// import { useActions } from "../../hooks/useActions";
// import { useSelector } from "react-redux";
// import * as Yup from "yup";
// import { Form, Formik } from "formik";

// const createOptionControl = (number) => {
//   return createControl({
//     label: `Вариант ${number}`,
//     id: number,
//   });
// };

// const createFormControls = () => {
//   return {
//     question: createControl({
//       label: "Введите вопрос",
//     }),
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
//     rightAnswerId: 1,
//     formControls: createFormControls(),
//   });

//   const initialValues = {
//     control: "",
//   };

//   const validationSchema = Yup.object({
//     control: Yup.string().required(""),
//   });

//   const onChangeHandler = (value, controlName) => {
//     const formControls = { ...state.formControls };
//     const control = { ...formControls[controlName] };

//     control.value = value;

//     formControls[controlName] = control;

//     setState({
//       formControls,
//     });
//   };

//   const renderControls = () =>
//     Object.keys(state.formControls).map((controlName, index) => {
//       const control = state.formControls[controlName];

//       return (
//         <div key={controlName + index}>
//           <FormInput
//             label={control.label}
//             value={control.value}
//             name="control"
//             type="text"
//             placeholder="Введите вопрос..."
//             onChange={(e) => onChangeHandler(e.target.value, controlName)}
//           />
//           {index === 0 && <hr />}
//         </div>
//       );
//     });

//   const addQuestionHandler = () => {
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
//       rightAnswerId: 1,
//       formControls: createFormControls(),
//     });
//   };

//   const createQuizHandler = () => {
//     setState({
//       rightAnswerId: 1,
//       formControls: createFormControls(),
//     });

//     finishCreateQuiz();
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={addQuestionHandler}
//     >
//       <div className={classes.quizCreator}>
//         <div>
//           <h1>Создание теста</h1>

//           <Form className={classes.quizCreatorForm}>
//             {renderControls()}

//             <Button classType="primary" type="submit">
//               Добавить вопрос
//             </Button>
//           </Form>

//           <Button
//             type="success"
//             onClick={createQuizHandler}
//             disabled={quiz.length === 0}
//           >
//             Создать тест
//           </Button>
//         </div>
//       </div>
//     </Formik>
//   );
// };

// export default QuizCreator;
