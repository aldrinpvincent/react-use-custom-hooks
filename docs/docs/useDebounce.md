# useDebounce

A hook for debouncing.

## Examples

```jsx live
function DebounceExample(props) {
  const delayInMilliseconds = 1000;
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

## API

```typescript
const debouncedValue = useDebounce(
  value: any,
  delay?: number
);
```

### Params

| Property | Description                | Type     | Default |
| -------- | -------------------------- | -------- | ------- |
| value    | The value to be debounced. | `any`    | -       |
| delay    | Delay in milliseconds      | `number` | 500     |
