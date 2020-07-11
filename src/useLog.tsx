import { useEffect } from "react";

export const useLog = (value: any) => {
  useEffect(() => {
    console.log(value);
  }, [value]);
};
