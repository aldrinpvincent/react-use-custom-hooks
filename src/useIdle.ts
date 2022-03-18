import { useState, useEffect, useRef } from 'react';

const EVENTS_TO_LISTEN = [
  'keydown',
  'mousemove',
  'mousedown',
  'touchmove',
  'touchstart',
  'click',
  'scroll',
];

interface Options {
  events?: string[];
  initialState?: boolean;
  onlyPropEvents?: boolean;
}

export function useIdle(timeout: number = 2000, options?: Options) {
  const { events = [], initialState = true, onlyPropEvents = false } =
    options || {};
  const eventToListen = onlyPropEvents
    ? events
    : [...EVENTS_TO_LISTEN, ...events];

  const [isIdle, setIsIdle] = useState<boolean>(initialState);
  const timer = useRef<number>();

  useEffect(() => {
    const handleEvent = () => {
      setIsIdle(false);

      if (timer.current) {
        window.clearTimeout(timer.current);
      }

      timer.current = window.setTimeout(() => {
        setIsIdle(true);
      }, timeout);
    };

    eventToListen.forEach(event =>
      document.addEventListener(event, handleEvent)
    );

    return () => {
      eventToListen.forEach(event =>
        document.removeEventListener(event, handleEvent)
      );
    };
  }, [timeout]);

  return isIdle;
}
