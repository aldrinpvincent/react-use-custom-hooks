# useIsOnline

A hook for detecting network status of the user. This hook will return a boolean value indicating whether the user is online or not. The value will be automatically updated when the user's network status changes.

<pre>{`import {useIsOnline} from 'react-use-custom-hooks';`}</pre>

:::caution
The hook works based on value of `navigator.onLine` property, so this hook returns `true` does not always mean the user connected to the internet, it can also just a connection to some network.

If the browser doesn't support `navigator.onLine`, the hook will return `false/undefined`.

Early versions of Chrome and Safari always reported "true" for navigator.onLine

Desktop Firefox responds to the status of its "Work Offline" mode. If not in that mode, `navigator.onLine` is always true, regardless of the actual network connectivity status. See [ firefox bug](https://bugzilla.mozilla.org/show_bug.cgi?id=654579) for details.

:::

### Usage example

```typescript
const isOnline: boolean = useIsOnline();
```

### Playground

Try disconnecting and then connecting your network and see the value changes.

```jsx live
function IsOnlineExample(props) {
  const isOnline = useIsOnline();
  return <>User is online: {isOnline.toString()}</>;
}
```

### API

```typescript
export function useIsOnline(): Boolean;
```
