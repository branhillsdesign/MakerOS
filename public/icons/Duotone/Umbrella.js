import * as React from "react";

const SvgUmbrella = ({ title, titleId, ...props }) => (
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
      d="m4.5 14.5-1 1a2.121 2.121 0 0 0 3 3L20 5"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M21.5 3.5 20 5m0 0L6 12l.581.194A4.393 4.393 0 0 1 9.5 15.5a4.393 4.393 0 0 1 3.306 2.919L13 19l7-14Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgUmbrella;
