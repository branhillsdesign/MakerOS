import * as React from "react";

const SvgToggleOff = ({ title, titleId, ...props }) => (
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
      d="M7 7.6h10V6.4H7v1.2Zm10 8.8H7v1.2h10v-1.2Zm-10 0A4.4 4.4 0 0 1 2.6 12H1.4A5.6 5.6 0 0 0 7 17.6v-1.2ZM21.4 12a4.4 4.4 0 0 1-4.4 4.4v1.2a5.6 5.6 0 0 0 5.6-5.6h-1.2ZM17 7.6a4.4 4.4 0 0 1 4.4 4.4h1.2A5.6 5.6 0 0 0 17 6.4v1.2ZM7 6.4A5.6 5.6 0 0 0 1.4 12h1.2A4.4 4.4 0 0 1 7 7.6V6.4Z"
      fill="#555770"
    />
    <circle cx={7} cy={12} r={3.15} stroke="#555770" strokeWidth={1.2} />
  </svg>
);

export default SvgToggleOff;
