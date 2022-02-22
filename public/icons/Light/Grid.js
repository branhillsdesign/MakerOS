import * as React from "react";

const SvgGrid = ({ title, titleId, ...props }) => (
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
      d="M15 3h5a1 1 0 0 1 1 1v5m-6-6v18m0-18H9m6 18h5a1 1 0 0 0 1-1v-5m-6 6H9M21 9H3m18 0v6M3 9V4a1 1 0 0 1 1-1h5M3 9v6m18 0H3m0 0v5a1 1 0 0 0 1 1h5M9 3v18"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgGrid;
