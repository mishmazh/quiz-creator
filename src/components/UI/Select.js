const Select = ({ label, options, ...props }) => {
  const htmlFor = `${label}-${Math.random()}`;

  return (
    <div className="primary-select">
      <label htmlFor={htmlFor}>{label}</label>

      <select id={htmlFor} {...props}>
        {options.map((option, index) => {
          return (
            <option value={option.value} key={option.value + index}>
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
