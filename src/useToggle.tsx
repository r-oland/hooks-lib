import { useState } from "react";

export function useToggle(initial: any) {
  const [isToggled, setIsToggled] = useState(initial);
  const toggle = () => setIsToggled((prevState: any) => !prevState);

  return [isToggled, setIsToggled, toggle];
}
