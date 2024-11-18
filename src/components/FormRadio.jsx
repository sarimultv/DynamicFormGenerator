const FormRadio = ({ item, name, type, required, handleFormValue }) => {
  const { value, label } = item;

  return (
    <div className="flex items-center justify-between my-2">
      <label htmlFor="id">{label}</label>
      <input
        id={name}
        type={type}
        required={required}
        name={name}
        value={value}
        onChange={handleFormValue}
      />
    </div>
  );
};

export default FormRadio;
