import { useState, useCallback } from "react";

function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e: Event) => {
    const input = e.target as HTMLInputElement;
    const value = input.value;
    const name = input.name;
    const form = input.closest("form");

    if (!form) {
      console.error("useFormWithValidation: form is null");

      return;
    }

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
    setIsValid(form.checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, resetForm, errors, isValid };
}

export default useFormWithValidation;
