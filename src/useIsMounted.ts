import { useCallback, useEffect, useRef } from 'react';

export function useIsMounted() {
  const mountedRef = useRef(false);
  const isMounted = useCallback(() => mountedRef.current, []);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return isMounted;
}
