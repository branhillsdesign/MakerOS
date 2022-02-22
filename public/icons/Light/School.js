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
      d="M21.637 17V9M18 10.667 21 9l-9-5-9 5 3 1.667m12 0L12 14l-6-3.333m12 0V16.5L12 20l-6-3.5v-5.833"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgSchool;
