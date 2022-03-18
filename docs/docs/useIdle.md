# useIdle

A hook to detect idle state of user. Idle state means user have not interacted with the page for a while.

<pre>{`import { useIdle } from 'react-use-custom-hooks';`}</pre>

### Usage example

```typescript
const idle = useIdle(5000);
```

### Playground

Pass the timeout value in milliseconds to `useIdle` hook as the first parameter. Default timeout is 2000ms.

```jsx live
function IdleExample(props) {
  const idle = useIdle(3000);

  return (
    <>
      <p>
        User is <b>{idle ? 'idle' : 'active'}</b>
      </p>
    </>
  );
}
```

#### Events

By default this hook will listen to `keydown`, `mousemove`, `mousedown`, `touchmove`, `touchstart`, `click` and `scroll` events. You can pass `events` array in `options` parameter to listen to additional events.

```jsx live
function IdleExampleWithEvents(props) {
  const idle = useIdle(3000, { events: ['resize'] });

  return (
    <>
      <p>
        User is <b>{idle ? 'idle' : 'active'}</b>
      </p>
    </>
  );
}
```

#### Listen only to specific events

Pass `onlyPropEvents` value `true` in `options` object to listen only to events passed in `events` in options.

```jsx live
function IdleExampleWithEvents(props) {
  const idle = useIdle(3000, { events: ['click'], onlyPropEvents: true });

  return (
    <>
      <p>
        User not clicked for last 3 seconds - <b>{idle ? 'yes' : 'no'}</b>
      </p>
    </>
  );
}
```

### API

```typescript
interface Options {
  events?: Array<string>;
  initialState?: boolean;
  onlyPropEvents?: boolean;
}

export function useIdle(timeout: number, options: Options): void;
```

#### Options

| Property       | Description                                                                 | Type            | Default |
| -------------- | --------------------------------------------------------------------------- | --------------- | ------- |
| events         | List of events to be listen to track idle status                            | `Array<string>` | `[]`    |
| initialState   | Initial state of hook                                                       | `Boolean`       | `true`  |
| onlyPropEvents | Pass `true` to listen only to the events passed in props for idle detection | `Boolean`       | `false` |
