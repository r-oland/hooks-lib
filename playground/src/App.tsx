import { useClient } from "hooks-lib";
import React from "react";

export default function App() {
  const { isClient, key } = useClient();

  return (
    <div>
      <h2>
        This is a <strong>{key}</strong> environment so isClient will return{" "}
        <strong>{isClient.toString()}</strong>
      </h2>
    </div>
  );
}
