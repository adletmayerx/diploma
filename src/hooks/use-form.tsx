import { useState, useCallback, type ChangeEvent } from "react";

function useFormWithValidation(initialValues?: Record<string, string>) {
  const [values, setValues] = useState<Record<string, string>>(
    initialValues ?? {}
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
