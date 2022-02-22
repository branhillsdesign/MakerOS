import * as React from "react";

const SvgBox = ({ title, titleId, ...props }) => (
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
      d="M4 8v12h16V8M4 8l3-4M4 8h3m13 0-3-4m3 4h-3M7 4h10M7 4v4m10-4v4m0 0H7"
      stroke="#555770"
      strokeWidth={2}
    />
    <mask
      id="Box_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={12}
      y={1}
      width={12}
      height={22}
    >
      <path fill="#000" d="M12 1h12v22H12z" />
    </mask>
    <g mask="url(#Box_svg__a)">
      <path
        d="M4 8v12h16V8M4 8l3-4M4 8h3m13 0-3-4m3 4h-3M7 4h10M7 4v4m10-4v4m0 0H7"
        stroke="currentColor"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgBox;
