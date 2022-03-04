# useLegacyState

This hook works similar to `this.setState` works in react class components. Here when you call `setState`, it shallow merges state partial into current state. It will be useful when you want change a class component to functional component.

<pre>{`import {useLegacyState} from 'react-use-custom-hooks';`}</pre>

### Usage example

```typescript
const [state, setState] = useLegacyState({ firstName: 'John' });

setState({ lastName: 'Doe' }); // state -> { firstName: 'John', lastName: Doe }
```

### Playground

```jsx live
function LegacyStateExample(props) {
  const [state, setState] = useLegacyState({ firstName: 'John' });

  return (
    <>
      <div>state - {JSON.stringify(state, null, 2)} </div>
      <input
        type="text"
        placeholder="Last name"
        onChange={e => setState({ lastName: e.target.value })}
      />
      <br />
      <input
        type="number"
        placeholder="Age"
        onChange={e => setState({ age: e.target.value })}
      />
    </>
  );
}
```

### API

```typescript
function useSetState<T extends Record<string, any>>(
  initialState: T
): readonly [
  T,
  (statePartial: Partial<T> | ((currentState: T) => Partial<T>)) => void
];
```
