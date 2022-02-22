import * as React from "react";

const SvgTableTennis = ({ title, titleId, ...props }) => (
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
      d="M19 20a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M9.1 15a7.034 7.034 0 0 1-.435-.467m.436.467c.14.138.288.27.44.396M9.101 15 3.5 20.601m0 0a2.451 2.451 0 0 1-.352-.552l5.517-5.516M3.5 20.6a1.3 1.3 0 0 0 .514.323l5.527-5.527m-.876-.864A6.969 6.969 0 0 1 7 10a7 7 0 1 1 2.541 5.396"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgTableTennis;
