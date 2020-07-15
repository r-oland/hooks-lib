import { useEffect, useState } from "react";

export function useStorage<T>(
  key: string,
  initial: T
): [boolean, React.Dispatch<any>] {
  const LocalValue: any =
    typeof window !== "undefined" && localStorage.getItem(key);
  const [state, setState] = useState(() => JSON.parse(LocalValue) || initial);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
