import { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export function useIsOnline(): Boolean {
  const isNavigatorOnLineDefined: boolean =
    typeof window.navigator.onLine === 'boolean';
  const [isOnline, setIsOnline] = useState<boolean>(window.navigator.onLine);

  const onStatusChange = useCallback(
    () => setIsOnline(window.navigator.onLine),
    []
  );

  useEffect(() => {
    if (!isNavigatorOnLineDefined) {
      return;
    }
    window.addEventListener('online', onStatusChange);
    window.addEventListener('offline', onStatusChange);

    return () => {
      window.removeEventListener('online', onStatusChange);
      window.removeEventListener('offline', onStatusChange);
    };
  }, []);

  return isOnline;
}
