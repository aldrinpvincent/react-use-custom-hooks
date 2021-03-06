# useDebounce

A hook to debounce value changes. This can be used to perform an expensive operation based on react state, props or any calculated value.

<pre>{`import { useDebounce } from 'react-use-custom-hooks';`}</pre>

### Usage example

```typescript
const [query, setQuery] = useState('');
const debouncedQuery = useDebounce(query, delayInMilliseconds);
```

### Playground

The `debouncedQuery` value will be updated after `delayInMilliseconds` after the last change and it can be used to perform a search operation instead of querying the api every time the user types a character.

```jsx live
function DebounceExample(props) {
  const delayInMilliseconds = 1000; // put outside of component
  const [query, setQuery] = React.useState('');
  const debouncedQuery = useDebounce(query, delayInMilliseconds);

  return (
    <>
      Debounced value will get updated after {delayInMilliseconds}ms once you
      stop typing
      <br />
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Enter query"
      />
      <br />
      Entered value: <b>{query}</b>
      <br />
      Debounced value: <b>{debouncedQuery}</b>
      <br />
    </>
  );
}
```

### API

```typescript
function useDebounce<T>(value: T, delay?: number = 500);
```

#### Params

| Property | Description                | Type     | Default |
| -------- | -------------------------- | -------- | ------- |
| value    | The value to be debounced. | `any`    | -       |
| delay    | Delay in milliseconds      | `number` | 500     |
