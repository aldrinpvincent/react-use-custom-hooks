# useSafeState

A memory safe version of react's `useState` hook. In react, on way memory leak occurs when `setState` operation performed on an unmounted component and it happens mostly with asynchronous opration like AJAX calls.

For example, if the user initiated an AJAX call and navigated away from tha page before the call is returned, the component will get unmounted and when the api call is fulfilled, the `setstate` will be performed on the unmounted component causing a memory leak.

This hook will prevent these kind of memory leaks by checking whether the component is mounted before `setstate` operation, if the component is unmounted, it will jsut ignore the `setstate` call. The API is same as react's `useState` hook, so you can use this hook instead of `useState` for asynchronous opration to avoid any memory leak.

<pre>{`import {useSafeState} from 'react-use-custom-hooks';`}</pre>

### Usage example

```typescript
const [value, setvalue] = useSafeState(initialState);
```

### Playground

```jsx live
function SafeStateExample(props) {
  const [data, setData] = useSafeState();

  useEffect(() => {
    setTimeout(() => {
      setData('some value');
    }, 3000);
  }, []);

  return <div>{data || 'loading...'}</div>;
}
```

### API

```typescript
function useSafeState<T>(initialState: T): [T, (value: T) => void];
```
