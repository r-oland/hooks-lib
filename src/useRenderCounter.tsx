let renderCount = 0;

export function useRenderCounter() {
  renderCount++;
  console.log(`render count: ${renderCount}`);
  return renderCount;
}
