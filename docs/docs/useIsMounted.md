# useIsMounted

This hook is used to check whether the component is mounted or not. This hook will return a function which will return a boolean value stating the component is mounted or not on calling. This will be useful if you want to perform some operation based on component is mounted or not like stop polling an api, update state etc.

<pre>{`import {useIsMounted} from 'react-use-custom-hooks';`}</pre>

### Usage example

```typescript
const isMounted = useIsMounted();
if (isMounted()) {
  // continue
}
```

### Playground

The value returned by the `isMounted` function will be true if the component is mounted and false if the component is unmounted.

```jsx live
function IsMountedExample(props) {
  const isMounted = useIsMounted();

  useEffect(() => {
    console.log('isMounted :>> ', isMounted());

    return () => {
      console.log('isMounted :>> ', isMounted());
    };
  }, []);

  return (
    <div>
      Check console to see the value of <b>isMounted()</b>
    </div>
  );
}
```

### API

```typescript
function useIsMounted(): () => Boolean;
```
