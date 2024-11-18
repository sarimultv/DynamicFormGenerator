import { useState } from "react";
import { jsonData } from "../utils/data";
import FormInput from "./FormInput";

const FormPreview = () => {
  const { formTitle, formDescription, fields } = jsonData;
  const [formValue, setFormValue] = useState(
    fields.reduce(
      (acc, field) => ({
        ...acc,
        [field.id]: "",
      }),
      {}
    )
  );

  const handleFormValue = (e) => {
    const { name, value } = e.target;
    setFormValue((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmitForm = (evt) => {
    evt.preventDefault();

    console.log(
      "Form Submitted Successfully..! " + JSON.stringify(formValue, null, 2)
    );
    setFormValue(
      fields.reduce(
        (acc, field) => ({
          ...acc,
          [field.id]: "",
        }),
        {}
      )
    );
  };

  return (
    <div className="md:w-[50%] p-4 max-sm:w-[100%]">
      <form
        onSubmit={handleSubmitForm}
        className="w-[100%] border border-gray-700 p-4 rounded-lg"
      >
        <h1 className="text-center uppercase text-2xl font-bold">
          {formTitle}
        </h1>
        <p className="py-2 text-sm">*{formDescription}</p>

        {fields.map((item) => (
          <FormInput
            key={item.id}
            fields={item}
            formValue={formValue}
            handleFormValue={handleFormValue}
          />
        ))}

        <input
          className="border border-gray-400 p-2 w-[100%] bg-gray-700 text-white rounded-md font-bold cursor-pointer hover:bg-gray-500 hover:text-white hover:font-bold"
          type="submit"
          value={"Submit"}
        />
      </form>
    </div>
  );
};

export default FormPreview;