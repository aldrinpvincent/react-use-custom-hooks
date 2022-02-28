import { useReducer } from 'react';

export function useLegacyState<T>(
  initialState: T
): [T, (value: Record<string, any>) => void] {
  return useReducer(
    (state: T, update: Record<string, any>) => ({
      ...state,
      ...update,
    }),
    initialState
  );
}
