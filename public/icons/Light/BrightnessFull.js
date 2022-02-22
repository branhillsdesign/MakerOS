import * as React from "react";

const SvgBrightnessFull = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.778 4.222 12 1l3.222 3.222h4.556v4.556L23 12l-3.222 3.222v4.556h-4.556L12 23l-3.222-3.222H4.222v-4.556L1 12l3.222-3.222V4.222h4.556ZM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
      fill="#555770"
    />
  </svg>
);

export default SvgBrightnessFull;
