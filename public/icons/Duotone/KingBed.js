import * as React from "react";

const SvgKingBed = ({ title, titleId, ...props }) => (
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
      d="M4.5 17.338 4.387 17h.226l-.113.338Zm15 0L19.387 17h.226l-.113.338ZM12 6H6a1 1 0 0 0-1 1v4h7m0-5v5m0-5h6a1 1 0 0 1 1 1v4h-7"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M21 16H3v-4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgKingBed;
