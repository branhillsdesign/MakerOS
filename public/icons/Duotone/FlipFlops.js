import * as React from "react";

const SvgFlipFlops = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M6 2v3.765m0 0L1.5 8.118M6 5.765l4.5 2.353M18 6v3.765m0 0-4.5 2.353M18 9.765l4.5 2.353"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M1.5 6.235C1.5 3.896 3.515 2 6 2s4.5 1.896 4.5 4.235v1.883l-.5 5.647C9.69 16.14 8.485 18 6 18c-2.485 0-3.671-1.954-4-4.235l-.5-5.647V6.235ZM13.5 10.235C13.5 7.896 15.515 6 18 6s4.5 1.896 4.5 4.235v1.883l-.5 5.647C21.69 20.14 20.485 22 18 22c-2.485 0-3.671-1.954-4-4.235l-.5-5.647v-1.883Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgFlipFlops;
