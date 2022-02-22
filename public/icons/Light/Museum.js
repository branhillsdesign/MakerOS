import * as React from "react";

const SvgMuseum = ({ title, titleId, ...props }) => (
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
      d="M2 21h3m17 0h-3M5 21h14M5 21V10m14 11V10M5 10V8h14v2M5 10H3V9l9-6 9 6v1h-2m-4 8v-6.5h-.5l-2.5 4-2.5-4H9V18"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgMuseum;
