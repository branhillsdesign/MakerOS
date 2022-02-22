import * as React from "react";

const SvgChess = ({ title, titleId, ...props }) => (
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
      d="M22 3h-4m-4 0h-4m8 4h-4m-4-2h4M6 3H2m8 4H6m0-2H2m20 6h-4m0 2h4m-8-2h-4m8 4h-4m-8-4H2m8 4H6m8-2h-4m-4 0H2m16-4h-4m-4 0H6m16 10h-4m-4 0h-4m-4 0H2m16-2h-4m-4 0H6m0 4H2m8 0h4m4 0h4M18 5h4"
      stroke="#555770"
      strokeWidth={2}
    />
    <path d="M1 23V1h22v22H1Z" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgChess;
