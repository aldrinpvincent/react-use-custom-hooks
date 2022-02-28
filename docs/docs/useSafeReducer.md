
# useSafeReducer

A memory safe version of react's `useSafeReducer` hook.

This hook will prevent memory leaks by checking the component is unmounted before the state update operation due to `dispatch` if the component is unmounted, it will jsut ignore the `dispatch` operation. The API is same as react's `useReducer` hook, so you can use this hook instead of `useReducer` for asynchronous opration to avoid any memory leak.

## Examples

### Basic usage



## API

```typescript
const [state, dispatch] = useSafeReducer(initialState, reducer)
```

