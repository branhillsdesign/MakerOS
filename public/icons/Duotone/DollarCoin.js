import * as React from "react";

const SvgDollarCoin = ({ title, titleId, ...props }) => (
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
    <circle cx={12} cy={12} r={10} stroke="#555770" strokeWidth={2} />
    <path
      d="M15 9.55c0-1.353-1.343-2.45-3-2.45m0 0c-1.657 0-3 1.097-3 2.45 0 1.353 1.433 2.084 3 2.45 1.5.35 3 1.097 3 2.45 0 1.353-1.343 2.45-3 2.45m0-9.8V5m0 11.9c-1.657 0-3-1.097-3-2.45m3 2.45V19"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgDollarCoin;
