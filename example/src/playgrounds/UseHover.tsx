// Components==============
import { useHover, useRenderCounter } from "hooks-lib";
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  background: green;
`;

export default function UseHover() {
  const [hover, watch] = useHover();
  const [count] = useRenderCounter();

  return (
    <>
      <Wrapper {...watch} />
      <p>{hover.toString()}</p>
      <p>{count}</p>
    </>
  );
}
