import * as React from "react";

const SvgFaceId = ({ title, titleId, ...props }) => (
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
      d="M16 3h2a3 3 0 0 1 3 3v2M8 3H6a3 3 0 0 0-3 3v2m13 13h2a3 3 0 0 0 3-3v-2M8 21H6a3 3 0 0 1-3-3v-2"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 8v2m8-2v2m-4-2v5h-1.5M9 16c.835.628 1.874 1 3 1a4.978 4.978 0 0 0 3-1"
      stroke="#555770"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgFaceId;
