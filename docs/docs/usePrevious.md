# usePrevious

If you want to access the previous props or state in functional components, you can use the `usePrevious` hook. This hook would work for props, state, or any other calculated value.

<pre>{`import { usePrevious } from 'react-use-custom-hooks';`}</pre>

### Usage example

```typescript
const [value, setValue] = useState(initialState);
const previousValue = usePrevious(value);
```

### Playground

```jsx live
function PreviousStateExample(props) {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div>
      Current value: <b>{count}</b>
      <br />
      Previous value: <b>{prevCount}</b>
      <br />
      <button onClick={() => setCount(count + 1)}>++ count</button>
      <button
        style={{ marginLeft: '10px' }}
        onClick={() => setCount(count - 1)}
      >
        -- count
      </button>
    </div>
  );
}
```

### API

```typescript
function usePrevious<T>(value: T): T | undefined;
```

#### Params

| Property | Description                                       | Type  | Default |
| -------- | ------------------------------------------------- | ----- | ------- |
| value    | The state/prop value that previous value required | `any` | -       |
