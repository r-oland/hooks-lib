import { useEffect } from "react";

export function useOnClickOutside(
  ref: any,
  handler: (e: any) => void,
  condition = true
) {
  useEffect(() => {
    if (condition) {
      const listener = (event: MouseEvent | TouchEvent) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }

    return;
  }, [ref, handler, condition]);
}
