import { useEffect, useState } from "react";

export function useWindowWidth() {
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
  }, []);

  return width;
}
