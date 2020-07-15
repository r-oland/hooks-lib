import { SetStateAction, useState } from "react";

export function useToggle(
  initial: boolean
): [boolean, () => void, React.Dispatch<SetStateAction<boolean>>] {
  const [isToggled, setIsToggled] = useState(initial);
  const toggle = () => setIsToggled((prevState) => !prevState);

  return [isToggled, toggle, setIsToggled];
}
