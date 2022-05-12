export const createQuizBtnDisabled = (formControls) => {
  const { question, option1, option2, option3, option4 } = formControls;

  return (
    question.value &&
    option1.value &&
    option2.value &&
    option3.value &&
    option4.value
  );
};

const createOptionControl = (number) => ({
  label: `Вариант ${number}`,
  value: "",
  id: number,
});

export const createFormControls = () => ({
  question: {
    label: "Вопрос",
    value: "",
  },
  option1: createOptionControl(1),
  option2: createOptionControl(2),
  option3: createOptionControl(3),
  option4: createOptionControl(4),
});
