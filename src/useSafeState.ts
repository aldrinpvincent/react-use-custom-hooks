import { useCallback, useState } from 'react';
import { useIsMounted } from './useIsMounted';

export function useSafeState<T>(initialState: T): [T, (value: T) => void] {
  const isMounted = useIsMounted();
  const [state, setState] = useState(initialState);

  const safeSetState = useCallback(
    (value: T) => {
      if (isMounted()) {
        setState(value);
      }
    },
    [isMounted]
  );

  return [state, safeSetState];
}
