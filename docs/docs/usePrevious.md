# usePrevious

If you want to access the previous props or state in functional components, you can use the `usePrevious` hook. This hook would work for props, state, or any other calculated value.

## Usage

```typescript
const [value, setvalue] = useState(initialState);
const previousValue = usePrevious(value);
```

## Examples

```jsx live
function PreviousStateExample(props) {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

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
const previousState = usePrevious(state);
```

</TabItem>
<TabItem value="ts" label="Typescript">

```typescript
const previousState: T = usePrevious<T>(state: T);
```

</TabItem>

</Tabs>

### Params

| Property | Description                                       | Type  | Default |
| -------- | ------------------------------------------------- | ----- | ------- |
| value    | The state/prop value that previous value required | `any` | -       |
