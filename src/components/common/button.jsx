function Button({
  text,
  type = "button",
  variant = "primary",
  onClick
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-${variant}`}
    >
      {text}
    </button>
  );
}

export default Button;