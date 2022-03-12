import { useEffect, useRef } from 'react';

interface Options {
  restoreOnUnmount?: boolean;
}

const DEFAULT_OPTIONS: Options = {
  restoreOnUnmount: false,
};

export function useTitle(
  title: string,
  options: Options = DEFAULT_OPTIONS
): void {
  const isDocumentDefined = typeof document !== 'undefined';
  const originalTitle = useRef(isDocumentDefined ? document.title : '');

  useEffect(() => {
    if (!isDocumentDefined) return;
    if (document.title !== title) document.title = title;
    return () => {
      if (options?.restoreOnUnmount) document.title = originalTitle.current;
    };
  }, [title]);
}
