const Input = ({ type, label, ...props }) => {
  const inputType = type || "text";
  const htmlFor = `${inputType}-${Math.random()}`;

  return (
    <div className="primary-input">
      <label htmlFor={htmlFor}>{label}</label>
      <input type={inputType} id={htmlFor} {...props} />
    </div>
  );
};

export default Input;
