import * as React from "react";

const SvgFinishFlag = ({ title, titleId, ...props }) => (
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
      d="M22 4h-2m0 2h-2m0-2h-2m2 4h-2m6 0h-2m-6-4h-2m0 2h-2m0-2H8m2 4H8m6 0h-2m4-2h-2M8 6H6m16 6h-2m0 2h-2m0-2h-2m2 4h-2m6 0h-2m-6-4h-2m0 2h-2m0-2H8m2 4H8m6 0h-2m4-2h-2m-6 0H6m14-4h-2m-2 0h-2m-2 0h-2m-2 0H6m0-6H4m2 4H4m2 4H4m2 4H4"
      stroke="#555770"
      strokeWidth={2}
    />
    <path d="M3 2v22" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgFinishFlag;
