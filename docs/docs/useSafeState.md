# useSafeState

:::caution This hook will be deprecated soon

The warning from react when you set state on unmounted component will be removed from React 18 onwards since there is no actual memory leak in case of promises and the warning is misleading in those scenarios. Also future version of react offer a feature that lets you preserve DOM and state even when the component is not visible, but disconnect its effects. That might not work will with the implementation of this hook.

See detailed discussion here - https://github.com/reactwg/react-18/discussions/82

:::

A memory safe version of react's `useState` hook. In react, on way memory leak occurs when `setState` operation performed on an unmounted component and it happens mostly with asynchronous operation like AJAX calls.

For example, if the user initiated an AJAX call and navigated away from tha page before the call is returned, the component will get unmounted and when the api call is fulfilled, the `setState` will be performed on the unmounted component causing a memory leak.

For small applications, leaking memory might not be a big issue since there is not much client side navigation happening and the memory will get cleared on reload. But for large applications, especially large single page applications, it can be a problem since the user navigates to multiple pages of the application over time without reloading the app and thus if there is any leak it will grew over time causing the app to break eventually.

This hook will prevent these kind of memory leaks by checking whether the component is mounted before `setState` operation, if the component is unmounted, it will just ignore the `setState` call. The API is same as react's `useState` hook, so you can use this hook instead of `useState` for asynchronous operation to avoid any memory leak.

<pre>{`import { useSafeState } from 'react-use-custom-hooks';`}</pre>

### Usage example

```typescript
const [value, setValue] = useSafeState(initialState);
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
