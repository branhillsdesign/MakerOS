import * as React from "react";

const SvgUndo = ({ title, titleId, ...props }) => (
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
      d="M21 15c-.895-4.008-4.425-7-8.642-7-3.038 0-5.72 1.552-7.316 3.919"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <path
      d="M2.6 14.4h4.951L2.6 9.449V14.4Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgUndo;
