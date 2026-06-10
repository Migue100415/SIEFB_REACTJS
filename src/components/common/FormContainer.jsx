function FormContainer({
  title,
  children
}) {
  return (
    <div className="card shadow">

      <div className="card-header">
        <h3>{title}</h3>
      </div>

      <div className="card-body">
        {children}
      </div>

    </div>
  );
}

export default FormContainer;