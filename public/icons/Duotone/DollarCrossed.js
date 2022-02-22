import * as React from "react";

const SvgDollarCrossed = ({ title, titleId, ...props }) => (
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
      id="Dollar_Crossed_svg__a"
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
        d="M19.784 19.78 4 3.998H0V24h24V0H5.698v2.866l15.5 15.5-1.414 1.415Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Dollar_Crossed_svg__a)" strokeWidth={2}>
      <path d="m3.524 4.942 15.5 15.5" stroke="#555770" />
      <path d="M12 5.7V3m0 15.3V21" stroke="currentColor" />
      <path
        d="M16 8.85c0-1.74-1.79-3.15-4-3.15S8 7.11 8 8.85m8 6.3c0 1.74-1.79 3.15-4 3.15s-4-1.41-4-3.15"
        stroke="#555770"
      />
    </g>
  </svg>
);

export default SvgDollarCrossed;
