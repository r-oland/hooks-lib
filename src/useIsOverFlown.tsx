import { useEffect, useState } from "react";

export const useIsOverflown = (ref: React.MutableRefObject<HTMLElement>) => {
  const [xIsOverFlown, setXIsOverFlown] = useState(false);
  const [yIsOverFlown, setYIsOverFlown] = useState(false);

  useEffect(() => {
    const scrollHeight = ref.current.scrollHeight;
    const clientHeight = ref.current.clientHeight;
    const scrollWidth = ref.current.scrollWidth;
    const clientWidth = ref.current.clientWidth;

    setYIsOverFlown(scrollHeight > clientHeight);
    setXIsOverFlown(scrollWidth > clientWidth);
  }, [ref, setXIsOverFlown, setYIsOverFlown]);

  return [xIsOverFlown, yIsOverFlown];
};
