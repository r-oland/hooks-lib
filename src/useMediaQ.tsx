import { useEffect, useState } from "react";

export const useMediaQ = (
  minMax: "min" | "max",
  MinMaxWidth: number
): boolean => {
  const innerWidth = typeof window !== "undefined" && window.innerWidth;
  const [width, setWidth] = useState(innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  if (minMax === "min") return width > MinMaxWidth;
  else return width < MinMaxWidth;
};
