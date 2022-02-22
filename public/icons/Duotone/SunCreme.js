import * as React from "react";

const SvgSunCreme = ({ title, titleId, ...props }) => (
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
      d="m12 12-.879.879H9.88v1.242L9 15l.879.879v1.242h1.242L12 18l.879-.879h1.242V15.88L15 15l-.879-.879V12.88H12.88L12 12Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M18 18V9h-2V6H8v3H6v9a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSunCreme;
