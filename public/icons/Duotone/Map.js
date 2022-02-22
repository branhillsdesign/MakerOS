import * as React from "react";

const SvgMap = ({ title, titleId, ...props }) => (
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
      d="M9 4 3.068 5.977A.1.1 0 0 0 3 6.072v14.79a.1.1 0 0 0 .132.094L9 19M9 4l6 2M9 4v15m6-13 5.868-1.956a.1.1 0 0 1 .132.095v14.789a.1.1 0 0 1-.068.095L15 21m0-15v15m0 0-6-2"
      stroke="#555770"
      strokeWidth={2}
    />
    <mask
      id="Map_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={8}
      y={1}
      width={8}
      height={22}
    >
      <path fill="#000" d="M8 1h8v22H8z" />
    </mask>
    <g mask="url(#Map_svg__a)">
      <path
        d="M9 4 3.068 5.977A.1.1 0 0 0 3 6.072v14.79a.1.1 0 0 0 .132.094L9 19M9 4l6 2M9 4v15m6-13 5.868-1.956a.1.1 0 0 1 .132.095v14.789a.1.1 0 0 1-.068.095L15 21m0-15v15m0 0-6-2"
        stroke="currentColor"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgMap;
