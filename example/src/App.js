import { useLog } from "hooks-lib";
import React from "react";

const App = () => {
  const test = "hello world";
  useLog(test);
  return <h1>{test}</h1>;
};

export default App;
