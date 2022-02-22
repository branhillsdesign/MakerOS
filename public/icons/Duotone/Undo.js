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
      d="M21 15c-.895-4.008-4.425-7-8.642-7C8.499 8 5.217 10.504 4 14"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path d="M9 15H2V8l7 7Z" fill="#555770" />
  </svg>
);

export default SvgUndo;
