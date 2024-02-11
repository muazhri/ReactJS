const Button = (props) => {
  const { children, classname, onClick = () => {}, type = "button" } = props;
  return (
    <button
      className={`h-10 font-semibold rounded-md ${classname} text-white`}
      type={type}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
