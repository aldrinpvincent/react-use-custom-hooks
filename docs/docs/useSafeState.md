# useSafeState

A memory safe version of react's `useState` hook. In react memory leak occurs when `setState` operation performed on an unmounted component. This happens mostly with asynchronous opration like api calls.

For example, if the user initiated an api call and navigated away from tha page before the call is returned, the component will get unmounted and when the api call is fulfilled, `setstate` will be performed on the unmounted component causing a memory leak.

This hook will prevent these kind of memory leaks by checking whether the component is mounted before `setstate` operation, if the component is unmounted, it will jsut ignore the `setstate` call. The API is same as react's `useState` hook, so you can use this hook instead of `useState` for asynchronous opration to avoid any memory leak.

## Usage

```typescript
const [value, setvalue] = useSafeState(initialState);
```

## Examples

```jsx live
function SafeStateExample(props) {
  const [count, setCount] = useSafeState(0);

  return (
    <div>
      Current value: <b>{count}</b>, Previous value: <b>{prevCount}</b>
      <br />
      <button onClick={() => setCount(count + 1)}>+ count</button>
      <button
        style={{ marginLeft: '10px' }}
        onClick={() => setCount(count - 1)}
      >
        - count
      </button>
    </div>
  );
}
```

## API

import Tabs from '@theme/Tabs';
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

</Tabs>
