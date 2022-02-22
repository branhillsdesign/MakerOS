import * as React from "react";

const SvgToggleOn = ({ title, titleId, ...props }) => (
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
      d="M17 7.6H7V6.4h10v1.2ZM7 16.4h10v1.2H7v-1.2Zm10 0a4.4 4.4 0 0 0 4.4-4.4h1.2a5.6 5.6 0 0 1-5.6 5.6v-1.2ZM2.6 12A4.4 4.4 0 0 0 7 16.4v1.2A5.6 5.6 0 0 1 1.4 12h1.2ZM7 7.6A4.4 4.4 0 0 0 2.6 12H1.4A5.6 5.6 0 0 1 7 6.4v1.2Zm10-1.2a5.6 5.6 0 0 1 5.6 5.6h-1.2A4.4 4.4 0 0 0 17 7.6V6.4Z"
      fill="#555770"
    />
    <circle cx={17} cy={12} r={3.15} stroke="#555770" strokeWidth={1.2} />
  </svg>
);

export default SvgToggleOn;
