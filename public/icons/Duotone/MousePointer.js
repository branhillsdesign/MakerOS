import * as React from "react";

const SvgMousePointer = ({ title, titleId, ...props }) => (
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
      d="m11.583 14.114-.688.694L13.5 21l1.715-.666-2.634-6.22h-.998Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M7 18.745V3l11 11.114h-6.417l-.687.694L7 18.745Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMousePointer;
