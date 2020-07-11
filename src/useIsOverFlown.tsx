import { useEffect, useState } from "react";

export const useIsOverflown = (ref: any) => {
  const [isOverFlown, setIsOverFlown] = useState(false);

  useEffect(() => {
    const scrollHeight = ref.current.scrollHeight;
    const clientHeight = ref.current.clientHeight;

    setIsOverFlown(scrollHeight > clientHeight);
  }, [ref, setIsOverFlown]);

  return isOverFlown;
};
