import * as React from "react";

const SvgEyeCrossed = ({ title, titleId, ...props }) => (
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
      id="Eye_Crossed_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path
        d="M21.503 21.5.003 0 0 24h24V0H5.698v3.576l16.947 16.947-1.142.977Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Eye_Crossed_svg__a)" stroke="#555770">
      <path d="M2.5 3 21 21.5" strokeWidth={1.5} />
      <circle cx={12} cy={12} r={3.4} strokeWidth={1.2} />
      <path
        d="M12 18.4c-4.762 0-8.782-2.685-10.352-6.4C3.218 8.286 7.238 5.6 12 5.6c4.762 0 8.782 2.686 10.352 6.4-1.57 3.714-5.59 6.4-10.352 6.4Z"
        strokeWidth={1.2}
      />
    </g>
  </svg>
);

export default SvgEyeCrossed;
