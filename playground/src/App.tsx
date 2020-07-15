import { useWindowWidth } from "hooks-lib";
import React from "react";

export default function App() {
  const width = useWindowWidth();

  return (
    <div>
      <h2>
        This window is <strong>{width}px </strong>wide!
      </h2>
    </div>
  );
}
