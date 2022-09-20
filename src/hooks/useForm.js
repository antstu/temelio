import { useState } from "react";
import { saveToLocalStorage } from "../helpers";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const onSubmit = (e, type) => {
    e.preventDefault();
    saveToLocalStorage(type, values);
    clearForm();
  };

  const clearForm = () => setValues(initialValues);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return [values, handleChange, onSubmit];
};

export default useForm;
