import { SetStateAction, useMemo, useState } from "react";

export function useHover(): [
  boolean,
  {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  },
  React.Dispatch<SetStateAction<boolean>>
] {
  const [hover, setHover] = useState(false);

  const watch = useMemo(() => {
    return {
      onMouseEnter: () => {
        setHover(true);
      },
      onMouseLeave: () => {
        setHover(false);
      },
    };
  }, [setHover]);

  return [hover, watch, setHover];
}
