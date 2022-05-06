import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../src';

const initialState = {
  name: {
    value: '',
    validator: (value: string | any[]) => {
      return value.length > 0
        ? {
            isValid: true,
            errorMessages: [],
          }
        : {
            isValid: false,
            errorMessages: ['Name is required'],
          };
    },
  },
  age: {
    value: '',
    validator: (value: number) => {
      if (!value) {
        return {
          isValid: false,
          errorMessages: ['Age is required'],
        };
      }
      if (value > 120) {
        return {
          isValid: false,
          errorMessages: ['Age should be less than 120'],
        };
      }
      if (value < 5) {
        return {
          isValid: false,
          errorMessages: ['Age should be greater than 5'],
        };
      }
      return {
        isValid: true,
        errorMessages: [],
      };
    },
  },
};

describe('useForm', () => {
  it('should return correct initial state', () => {
    const { result } = renderHook(() => useForm(initialState));
    const [formData] = result.current;
    const expected = {
      name: { value: '', isValid: false, errorMessages: ['Name is required'] },
      age: { value: '', isValid: false, errorMessages: ['Age is required'] },
    };
    expect(JSON.stringify(formData)).toStrictEqual(JSON.stringify(expected));
  });

  it('should return the updated state after form state update', () => {
    const hook = renderHook(() => useForm(initialState));
    act(() => hook.result.current[1]('name', 'John'));
    const expected1 = {
      name: {
        value: 'John',
        isValid: true,
        errorMessages: [],
      },
      age: { value: '', isValid: false, errorMessages: ['Age is required'] },
    };
    expect(JSON.stringify(hook.result.current[0])).toStrictEqual(
      JSON.stringify(expected1)
    );

    act(() => hook.result.current[1]('age', 32));

    const expected2 = {
      name: {
        value: 'John',
        isValid: true,
        errorMessages: [],
      },
      age: { value: 32, isValid: true, errorMessages: [] },
    };
    expect(JSON.stringify(hook.result.current[0])).toStrictEqual(
      JSON.stringify(expected2)
    );
  });
});
