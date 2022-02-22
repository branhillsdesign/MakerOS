import * as React from "react";

const SvgGlasses = ({ title, titleId, ...props }) => (
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
      d="M8.997 11.357A3.99 3.99 0 0 1 12 10a3.99 3.99 0 0 1 3.003 1.357m-6.006 0a3.5 3.5 0 1 0-6.994.286 3.5 3.5 0 0 0 6.994-.286Zm6.006 0a3.5 3.5 0 1 0 6.994.285 3.5 3.5 0 0 0-6.994-.285Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgGlasses;
