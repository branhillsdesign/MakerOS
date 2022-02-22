import * as React from "react";

const SvgPrint = ({ title, titleId, ...props }) => (
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
      d="M6 16H2V9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v7h-4"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M6 6V3h12v3M6 21h12v-8H6v8Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <circle cx={19} cy={10} r={0.5} stroke="#555770" />
  </svg>
);

export default SvgPrint;
