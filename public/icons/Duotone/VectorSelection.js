import * as React from "react";

const SvgVectorSelection = ({ title, titleId, ...props }) => (
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
      d="M7 5h10M5 7v10m2 2h10m2-2V7"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M3 3h4v4H3V3ZM3 17h4v4H3v-4ZM17 3h4v4h-4V3ZM17 17h4v4h-4v-4Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgVectorSelection;
