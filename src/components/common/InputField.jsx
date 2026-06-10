function InputField({
  label,
  type = "text",
  name,
  value,
  onChange,
  required = false,
  placeholder = ""
}) {
  return (
    <div className="mb-3">

      <label
        htmlFor={name}
        className="form-label fw-bold"
      >
        {label}
      </label>

      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="form-control"
      />

    </div>
  );
}

export default InputField;