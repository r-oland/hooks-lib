import { useEffect } from "react";

export const useLog = (...value: any) => {
  useEffect(() => {
    const logMessage =
      value.length === 0
        ? "Provide an argument"
        : value.length === 1
        ? value[0]
        : value;

    console.log(logMessage);
  }, [value]);
};
