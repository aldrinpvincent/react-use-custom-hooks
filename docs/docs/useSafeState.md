# useSafeState

A memory safe version of react's `useState` hook. In react memory leak occurs when `setState` operation performed on an unmounted component and leak happens mostly with asynchronous opration like AJAX calls.

For example, if the user initiated an AJAX call and navigated away from tha page before the call is returned, the component will get unmounted and when the api call is fulfilled, the `setstate` will be performed on the unmounted component causing a memory leak.

This hook will prevent these kind of memory leaks by checking whether the component is mounted before `setstate` operation, if the component is unmounted, it will jsut ignore the `setstate` call. The API is same as react's `useState` hook, so you can use this hook instead of `useState` for asynchronous opration to avoid any memory leak.

### Usage example

```typescript
const [value, setvalue] = useSafeState(initialState);
```

### Playground

```jsx live
function SafeStateExample(props) {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(false)}>Unmount</button>
      {visible && <Child />}
    </div>
  );
}
```

### API

```js
const [state, setState] = useSafeState(initialState);
```

<!-- import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="js" label="JavaScript">

```js
const [state, setState] = useSafeState(initialState);
```

</TabItem>
<TabItem value="ts" label="Typescript">

```typescript
const [state, setState] = useSafeState(initialState);
```

</TabItem>

</Tabs> -->
