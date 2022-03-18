# useTitle

A hook to manage title value of document.

<pre>{`import { useTitle } from 'react-use-custom-hooks';`}</pre>

### Usage example

```typescript
useTitle('My title');
```

### Playground

You can pass static value or computed value, state or prop to `useTitle` hook. The title of the document will get's updated whenever the value changes. Also you can restore the previous title if the component using this hook unmounts. Pass `restoreOnUnmount` value `true` in `options` object to configure the behavior.

```jsx live
function TitleExample(props) {
  const [title, setTitle] = useState('My Title!');
  useTitle(title);
  return (
    <>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
    </>
  );
}
```

### API

```typescript
interface Options {
  restoreOnUnmount?: boolean;
}

export function useTitle(title: string, options: Options): void;
```

#### Options

| Property         | Description                                    | Type      | Default |
| ---------------- | ---------------------------------------------- | --------- | ------- |
| restoreOnUnmount | Indicate to restore the title value on unmount | `boolean` | false   |
