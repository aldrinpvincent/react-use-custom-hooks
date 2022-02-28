import { useEffect, useRef } from 'react';

export function usePrevious<T>(value: T): T {
  // Store current value in ref
  const ref: any = useRef<T>();

  useEffect(() => {
    // Update the value if it changes
    ref.current = value;
  }, [value]);

  // return the previous value
  return ref.current;
}
