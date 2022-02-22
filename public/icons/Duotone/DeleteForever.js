import * as React from "react";

const SvgDeleteForever = ({ title, titleId, ...props }) => (
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
      d="m15.106 4.447.276.553H8.618l.276-.553.448-.894A1 1 0 0 1 10.236 3h3.528a1 1 0 0 1 .894.553l.448.894Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M7 21a1 1 0 0 1-1-1V9h12v11a1 1 0 0 1-1 1H7Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="m15 12-3 3m0 0-3 3m3-3 3 3m-3-3-3-3"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgDeleteForever;
