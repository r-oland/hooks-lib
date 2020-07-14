import { useLog } from "hooks-lib";
import React from "react";
import "./styles.css";

const App = () => {
  const [, setState] = React.useState(0);

  console.log("I will bloat your console on every render");

  useLog("I will only log when I change!", 2, true);

  return <button onClick={() => setState((prev) => prev + 1)}>Click</button>;
};

export default App;
