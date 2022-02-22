import * as React from "react";

const SvgWallet = ({ title, titleId, ...props }) => (
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
      d="M20 16h-7a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h7m0 8a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1m0 8v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <rect
      x={14.5}
      y={10.5}
      width={3}
      height={3}
      rx={1.5}
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgWallet;
