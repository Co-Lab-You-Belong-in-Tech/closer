  // This function creates a ref that stores a callback.
  // It also creates an effect that clears the timeout when the component unmounts.
  // It returns the ref.

import { useRef, useEffect } from "react";

export const useTimeout = (
  callback: () => void,
  delay: number
): React.MutableRefObject<() => void> => {
  // Create a ref that stores callback
  const savedCallback = useRef<() => void>(callback);

  // Remember the latest callback.
  useEffect(() => {
    // When callback changes, update the ref
    savedCallback.current = callback;
  }, [callback]);

  // Set up the timeout.
  useEffect(() => {
    function tick() {
      // Call current callback from ref
      savedCallback.current!();
    }
    if (delay !== null) {
      // Set a timeout with delay and call tick
      let id = setTimeout(tick, delay);
      console.log("Timeout set");
      // Clear timeout when component unmounts
      return () => clearTimeout(id);
    }
  }, [delay]);

  return savedCallback;
};