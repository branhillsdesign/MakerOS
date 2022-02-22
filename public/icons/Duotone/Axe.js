import * as React from "react";

const SvgAxe = ({ title, titleId, ...props }) => (
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
      d="m17.24 6.808-2.419-2.423-4.146 4.153 2.419 2.424c.69.692 1.382 2.077.345 4.5 5.529 1.384 9.675-2.77 8.293-8.308-2.419 1.038-3.801.346-4.492-.346Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="m1 21 5.32-5.329a5.833 5.833 0 0 0 1.59-2.979 5.833 5.833 0 0 1 1.592-2.979l1.173-1.175 4.146-4.153L16.204 3"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgAxe;
