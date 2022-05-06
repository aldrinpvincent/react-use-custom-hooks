import { useEffect, useReducer } from 'react';

interface Options {
  successCallback?: Function;
  errorCallback?: Function;
}

const initialState = {
  loading: true,
  data: null,
  error: null,
};

function reducer(state: any, action: { type: any; data: any }) {
  switch (action.type) {
    case 'loading':
      return { ...state, loading: action.data };
    case 'data':
      return { ...state, data: action.data };
    case 'error':
      return { ...state, error: action.data };
    default:
      throw new Error();
  }
}

function callFunction(fn: Function | undefined, params: any[]) {
  if (fn && typeof fn === 'function') {
    fn(...params);
  }
}

/**
 * @param {Function} fn - async function to be called
 * @param {object} options - options for the hook
 *      @param {Function} successCallback - callback to be called when promise resolves
 *      @param {Function} errorCallback - callback to be called when promise rejects
 * @param {Array} deps array of dependencies
 * @returns {Array} - [loading, data, error, execute] - loading, data and error properties of the operation & a function to execute the operation again forcefully without any dependance change.
 */
export function useAsync(
  fn: () => Promise<any>,
  options?: Options,
  deps: Array<any> = []
): Array<any> {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loading, data, error } = state;

  const { successCallback, errorCallback } = options || {};
  const dependencyList = Array.isArray(deps) ? deps : [];

  const execute = async (didCancel: boolean) => {
    try {
      if (!loading) dispatch({ type: 'loading', data: true });

      const response = await fn();

      if (!didCancel) {
        dispatch({ type: 'data', data: response });
        dispatch({ type: 'error', data: null });
        callFunction(successCallback, [response]);
      }
    } catch (err) {
      if (!didCancel) {
        dispatch({ type: 'error', data: err });
        callFunction(errorCallback, [err]);
      }
    } finally {
      if (!didCancel) {
        dispatch({ type: 'loading', data: false });
      }
    }
  };

  useEffect(() => {
    let didCancel = false;

    execute(didCancel);

    return () => {
      didCancel = true;
    };
  }, dependencyList);

  return [data, loading, error, execute];
}
