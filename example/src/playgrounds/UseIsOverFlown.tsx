// Components==============
import { useIsOverflown } from "hooks-lib";
import React, { useRef } from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  background: yellow;
  overflow: auto;

  p {
    margin: 0;
  }
`;

const Box = styled.div`
  width: 200px;
  height: 50px;
  background: green;
`;

export default function UseIsOverflown() {
  const ref = useRef(null!);
  const [x, y] = useIsOverflown(ref);

  return (
    <>
      <Wrapper ref={ref}>
        <Box>
          <p>X: {x.toString()}</p>
          <p>Y: {y.toString()}</p>
        </Box>
      </Wrapper>
    </>
  );
}
