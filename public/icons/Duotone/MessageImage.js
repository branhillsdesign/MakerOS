import * as React from "react";

const SvgMessageImage = ({ title, titleId, ...props }) => (
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
      d="M20 4H4a1 1 0 0 0-1 1v14.792a.1.1 0 0 0 .162.078L6.75 17H20a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path d="M7 13h11l-3-3-1 1-3-3-5 5h1Z" fill="currentColor" />
  </svg>
);

export default SvgMessageImage;
