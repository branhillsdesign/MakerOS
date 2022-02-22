import * as React from "react";

const SvgSchool = ({ title, titleId, ...props }) => (
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
      d="m12 14 6-3.333V16.5L12 20l-6-3.5v-5.833L12 14Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M22 17V9M3 9l9-5 9 5-3 1.667L12 14l-6-3.333L3 9Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSchool;
