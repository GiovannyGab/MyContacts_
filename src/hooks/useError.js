import { useState } from 'react';

export default function useError() {
  const [errors, setErrors] = useState([]);

  function setError({ field, message }) {
    const errorAlredyExists = errors.find((error) => error.field === field);

    if (errorAlredyExists) {
      return;
    }
    setErrors((prevState) => [...prevState, { field, message }]);
  }

  function removeError(fieldName) {
    setErrors((prevState) => prevState.filter((error) => error.field !== fieldName));
  }

  function getErrorMessageByFieldName(fieldName) {
    return errors.find((error) => error.field === fieldName)?.message;
  }

  return {
    removeError, getErrorMessageByFieldName, setError, errors,
  };
}
