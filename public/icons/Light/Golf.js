import * as React from "react";

const SvgGolf = ({ title, titleId, ...props }) => (
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
      d="M7 18h1m9 0h-1m-8 0h8m-8 0c1.5 0 4 .4 4 4 0-3.6 2-4 4-4m2-9A6 6 0 1 1 6 9a6 6 0 0 1 12 0Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <path
      d="M10.4 8a.4.4 0 1 1-.8 0 .4.4 0 0 1 .8 0Zm4 0a.4.4 0 1 1-.8 0 .4.4 0 0 1 .8 0Zm-2-2a.4.4 0 1 1-.8 0 .4.4 0 0 1 .8 0Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgGolf;
