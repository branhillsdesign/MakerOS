import * as React from "react";

const SvgAccessible = ({ title, titleId, ...props }) => (
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
    <mask
      id="Accessible_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={3}
      y={12}
      width={12}
      height={10}
    >
      <path d="M3 12h6v6h6v4H3V12Z" fill="#fff" />
    </mask>
    <g mask="url(#Accessible_svg__a)">
      <circle cx={10} cy={17} r={4} stroke="currentColor" strokeWidth={2} />
    </g>
    <path
      d="M17 15.5a1 1 0 0 1 .866.5H12a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1c.201 0 .594.145.897.41.038.033.105.105.244.272l.09.11c.11.135.248.302.402.478L13 8.667V15.5h4ZM13 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgAccessible;
