
import React from 'react';
import { usePrevious, useSafeState, useDebounce } from "react-use-custom-hooks";

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  usePrevious,
  useSafeState,
  useDebounce
};

export default ReactLiveScope;
