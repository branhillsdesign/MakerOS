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
      d="M7 18.745V3l11 11.114h-5.419l2.634 6.22L13.5 21l-2.604-6.191L7 18.745Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgMousePointer;
