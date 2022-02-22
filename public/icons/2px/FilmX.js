import * as React from "react";

const SvgFilmX = ({ title, titleId, ...props }) => (
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
      d="M2 1v3m0 19v-3M22 1v3m0 19v-3M2 4h4M2 4v4m4-4V2h12v2M6 4v4M2 8h4M2 8v4m4-4v4m-4 0h4m-4 0v4m4-4v4m-4 0h4m-4 0v4m4-4v4m-4 0h4m0 0v2h12v-2m0-16h4m-4 0v4m4-4v4m-4 0h4m-4 0v4m4-4v4m-4 0h4m-4 0v4m4-4v4m-4 0h4m-4 0v4m4-4v4m-4 0h4M9 9l6 6m0-6-6 6"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgFilmX;
