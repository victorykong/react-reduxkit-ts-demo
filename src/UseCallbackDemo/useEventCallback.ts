import { useRef, useCallback, useEffect } from "react";

function useEventCallback(fn: () => void, dependencies: any[]) {
  const ref = useRef(() => {});

  useEffect(() => {
    ref.current = fn;
  }, [fn, ...dependencies]);

  const memoFn = useCallback(() => {
    const fn = ref.current;
    return fn();
  }, [ref]);

  return memoFn;
}

export default useEventCallback;
