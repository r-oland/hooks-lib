import { useEffect, useState } from "react";
import { useClient } from "./useClient";

export const useMediaQ = (
  minMax: "min" | "max",
  MinMaxWidth: number
): boolean | null => {
  const mounted = useClient();

  const innerWidth = typeof window !== "undefined" && window.innerWidth;
  const [width, setWidth] = useState(innerWidth);

  useEffect(() => {
    if (mounted) {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
    return;
  }, [setWidth, mounted]);

  if (!mounted) return null;

  if (minMax === "min") return width > MinMaxWidth;
  else return width < MinMaxWidth;
};
