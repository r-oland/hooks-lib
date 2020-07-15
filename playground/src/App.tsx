import { useMeasure } from "hooks-lib";
import React, { useRef } from "react";

export default function App() {
  const ref = useRef(null!);
  const bounds = useMeasure(ref);
  const getBoundingClientRect = (bounds: any) => {
    const { top, right, bottom, left, width, height, x, y } = bounds;
    return { top, right, bottom, left, width, height, x, y };
  };

  const arr = Object.entries(getBoundingClientRect(bounds));

  const values = arr.map((e, index: number) => {
    return (
      <p key={index}>
        {e[0]}: {Math.round(e[1])}
      </p>
    );
  });

  return (
    <>
      <div ref={ref} className="outerBox">
        <div className="innerBox" />
      </div>
      {values}
    </>
  );
}
