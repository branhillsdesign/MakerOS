import * as React from "react";

const SvgSunbed = ({ title, titleId, ...props }) => (
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
      d="m7 12-.707.707.293.293H7v-1ZM1.896 9.31l4.397 4.397 1.414-1.414-4.396-4.397-1.415 1.415Zm.5-.5 3.897 3.897 1.414-1.414-3.896-3.897-1.415 1.415ZM7 13h14.5v-2H7v2Zm-.707-.707-4 4 1.414 1.414 4-4-1.414-1.414ZM7 14h11v-2H7v2Zm11 0h3.5v-2H18v2Zm-.707-.293 4 4 1.414-1.414-4-4-1.414 1.414ZM2.853 9a.646.646 0 0 1-.457-.19l1.415-1.414A1.354 1.354 0 0 0 2.854 7v2ZM21 12.5a.5.5 0 0 1 .5-.5v2a1.5 1.5 0 0 0 1.5-1.5h-2Zm.5.5a.5.5 0 0 1-.5-.5h2a1.5 1.5 0 0 0-1.5-1.5v2ZM3.31 7.896A.646.646 0 0 1 2.855 9V7c-1.206 0-1.81 1.458-.958 2.31l1.415-1.414Z"
      fill="#555770"
    />
  </svg>
);

export default SvgSunbed;
