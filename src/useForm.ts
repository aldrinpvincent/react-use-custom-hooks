import { useCallback, useReducer } from 'react';

function init(initialState: { [x: string]: { value: any; validator: any } }) {
  const initialFormData: any = {};
  Object.keys(initialState).map(key => {
    const { value, validator } = initialState[key];

    const { isValid, errorMessages } =
      validator && typeof validator === 'function'
        ? validator(value)
        : { isValid: true, errorMessages: [] };

    initialFormData[key] = {
      value,
      isValid,
      errorMessages,
      validator,
    };
  });

  return initialFormData;
}

const reducer = (state: any, update: any) => ({ ...state, ...update });

export function useForm(initialState: any) {
  const [formData, setFormData] = useReducer(reducer, initialState, init);

  const handleFormDataChange = useCallback(
    (key, value) => {
      const validator = formData[key]?.validator;

      const { isValid, errorMessages } =
        validator && typeof validator === 'function'
          ? validator(value)
          : { isValid: true, errorMessages: [] };

      setFormData({
        [key]: {
          ...formData[key],
          value,
          isValid,
          errorMessages,
        },
      });
    },
    [formData]
  );

  return [formData, handleFormDataChange];
}
