
import React from 'react';
import { useDebounce, useSafeState, useIsMounted, usePrevious, useLegacyState, useTitle, useIsOnline, useIdle } from "react-use-custom-hooks";

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  useDebounce, useSafeState, useIsMounted, usePrevious, useLegacyState, useTitle, useIsOnline, useIdle
};

export default ReactLiveScope;

