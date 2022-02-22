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
      d="M10.896 14.809 7 18.745V3l11 11.114h-5.419m-1.685.694.687-.694h.998m-1.685.694L13.5 21l1.715-.666-2.634-6.22"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMousePointer;
