import { useSelector } from "react-redux";
import FormRadio from "./FormRadio";
import SelectOption from "./SelectOption";

const FormInput = ({ fields, formValue, handleFormValue }) => {
  const { id, type, label, required, placeholder, options, validation } =
    fields;

  const isValid = useSelector((store) => store.emailValid.isValid);

  return (
    <>
      <label className="p-1 text-lg" htmlFor={id}>
        {label}
      </label>

      {type === "select" ? (
        <select
          className="border bg-transparent p-2 w-[100%] rounded-md mb-4"
          name={id}
          type={type}
          required={required}
          onChange={handleFormValue}
        >
          {options.map((item) => (
            <SelectOption key={item.value} item={item} />
          ))}
        </select>
      ) : type === "radio" ? (
        options.map((item) => (
          <FormRadio
            key={item.value}
            item={item}
            name={id}
            type={type}
            required={required}
            handleFormValue={handleFormValue}
          />
        ))
      ) : type === "email" ? (
        <>
          <input
            value={formValue[id]}
            onChange={handleFormValue}
            className="border bg-transparent p-2 w-[100%] mb-4 rounded-md"
            name={id}
            type={type}
            placeholder={placeholder}
            required={required}
          />
          {isValid && <p className="pb-2">{validation.message}</p>}
        </>
      ) : (
        <input
          value={formValue[id]}
          onChange={handleFormValue}
          className="border bg-transparent p-2 w-[100%] mb-4 rounded-md"
          name={id}
          type={type}
          placeholder={placeholder}
          required={required}
        />
      )}
    </>
  );
};

export default FormInput;
