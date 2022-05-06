# useAsync

A hook to manage state of any asynchronous operation. This hook can be used to manage `loading`, `data` and `error` states of an asynchronous operation. It is mainly used for data fetching, the first argument to the hook is the function that fetches and returns data, required options is the second argument and dependencies is the last argument.

Only the most recent promise is considered in this hook, meaning you don't need to worry about any api race conditions could arise because of out of order responses from multiple api calls. In case of error the data will be of previous call or null.

<pre>{`import { useAsync } from 'react-use-custom-hooks';`}</pre>

### Usage example

```typescript
const [data, loading, error, refresh] = useAsync(() => fetchTodo(id), {}, [id]);
```

The fourth return value is a function to execute the operation again forcefully without any dependance change, like a refresh.

```typescript
<button onClick={() => refresh()}>Retry</button>
```

### Playground

The component will fetch and show the todo based on the id, when ever the id changes the component will fetch the todo corresponding to the id. If there is any error in data fetching we will show the error message with a retry button. User can retry the last failed request by clicking the retry button.

```jsx live
function AsyncExample(props) {
  const [id, setId] = React.useState(1);

  // Move this to a service function
  function fetchTodo(id) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => response.json())
      .then(json => json);
  }

  // if id changes, data will be fetched for the new id
  const [data, loading, error, refresh] = useAsync(() => fetchTodo(id), {}, [
    id,
  ]);
  if (loading) return <div>Loading...</div>;
  if (error)
    return (
      <div>
        Error: {error.message}
        // User can retry on error without page refresh
        <button onClick={() => refresh()}>Retry</button>
      </div>
    );

  return (
    <>
      <p>
        Id - <b>{id}</b>
      </p>
      <p>
        Data - <b>{JSON.stringify(data)}</b>
      </p>
      <button onClick={() => setId(id => id + 1)}>++ Id</button>
      <button
        style={{ marginLeft: '10px' }}
        onClick={() => setId(id => id - 1)}
      >
        -- Id
      </button>
    </>
  );
}
```

Only the most recent promise is considered in this hook, For example, in the above component there is a chance of race condition as depicted below.

1.  Currently id is 123 and fetching details of id is 123
2.  Then id changes to 465 while request for 123 is in progress and initiated request for 456
3.  Response for 456 came back, state is updated with 456 data
4.  Response for 123 came back, state is updated with 123 data

    Here the UI will show 123 data even though the user selected 456 as id. This hook will take care of this issue by keeping only the most recent promise in the state by ignoring the current one if a new request is triggered.

### API

```typescript
function useAsync(fn: () => Prm, options?: Options, deps = []);
```

#### Options

| Property        | Description                  | Type       | Default |
| --------------- | ---------------------------- | ---------- | ------- |
| successCallback | Callback function on success | `Function` | -       |
| errorCallback   | Callback function on failure | `Function` | -       |
