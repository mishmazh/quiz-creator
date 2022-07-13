const Button = ({ children, className, ...props }) => {
  const cls = ["btn", className];

  return (
    <button className={cls.join(" ")} {...props}>
      {children}
    </button>
  );
};

export default Button;
