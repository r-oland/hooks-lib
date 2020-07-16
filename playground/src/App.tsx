import { useClient } from "hooks-lib";
import React from "react";

export default function App() {
  const { isClient, key } = useClient();

  return (
    <div>
      <h2>
        {isClient.toString()} {key}
      </h2>
    </div>
  );
}
