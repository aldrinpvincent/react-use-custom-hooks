# useForm

A hook to manage state of a form. This is an opinionated hook that will manage all internal state of a form and add `isValid` and `errorMessages` properties to each field for validation purpose, these properties are derived from the validator function provided to hook and can used to render error messages and to check if the form field is valid.

<pre>{`import { useForm } from 'react-use-custom-hooks';`}</pre>

### Usage example

```typescript
const [formData, setFormData] = useForm(initialState);
```

1. The initial state passed to this hook should be an object with key is the field name and value is an object with `value` and `validator` properties. The validator function should return `isValid` and `errorMessages` for the particular field upon invoking. For example,

```js
useForm({
  name: {
    value: '',
    validator: value => {
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
});
```

2. This hook returns two values: form state and form change handler.
3. The form state is an object will have the same structure as initialState with `isValid` and `errorMessages` properties added to every field.
4. The form change handler is a function that takes a field name and a new value and updates the form state.
5. For every call to change handler the validation function will be invoked with new value and form state will be updated accordingly.

### Playground

```jsx live
function FormExample(props) {
  const initialState = {
    name: {
      value: '',
      validator: value => {
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
      validator: value => {
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

  const [formData, setFormData] = useForm(initialState); // All form updating and validation will be taken care by the hook
  const { name, age } = formData;

  const isValid = Object.values(formData).every(value => value.isValid);

  return (
    <form>
      <label htmlFor="name">Name : </label>
      <input
        type="text"
        value={name.value}
        onChange={e => setFormData('name', e.target.value)}
        style={{ border: `${!name.isValid ? '2px solid red' : ''}` }}
      />
      {name.errorMessages.length > 0 && (
        <div style={{ color: 'red' }}>{name.errorMessages[0]}</div>
      )}
      <br />
      <label htmlFor="age">Age : </label>
      <input
        type="number"
        value={age.value}
        onChange={e => setFormData('age', e.target.value)}
        style={{ border: `${!age.isValid ? '2px solid red' : ''}` }}
      />
      {age.errorMessages.length > 0 && (
        <div style={{ color: 'red' }}>{age.errorMessages[0]}</div>
      )}
      <br />
      Form is <b>{isValid ? 'valid' : 'invalid'}</b>
    </form>
  );
}
```

### API

```typescript
function useAsync(fn: () => any, options?: Options, deps = []);
```

#### Options

| Property        | Description                  | Type       | Default |
| --------------- | ---------------------------- | ---------- | ------- |
| successCallback | Callback function on success | `Function` | -       |
| errorCallback   | Callback function on failure | `Function` | -       |
