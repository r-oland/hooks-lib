// Components==============
import { useLayoutEffect, useState } from "react";
import ResizeObserver from "resize-observer-polyfill";
// =========================

export function useMeasure(ref: React.MutableRefObject<never>) {
  const [bounds, setBounds] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  });

  const [resizeO] = useState(() => {
    return new ResizeObserver(([entry]) => {
      setBounds(entry.contentRect);
    });
  });

  useLayoutEffect(() => {
    if (ref.current) {
      resizeO.observe(ref.current);
    }

    return () => {
      resizeO.disconnect();
    };
  }, [resizeO]);

  return bounds;
}
