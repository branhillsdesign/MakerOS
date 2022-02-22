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
    <g mask="url(#Dollar_Crossed_svg__a)">
      <path d="m3.524 4.942 15.5 15.5" stroke="#555770" strokeWidth={2} />
      <path
        d="M9 8.85c0-.978 1.107-2.15 3-2.15v-2c-2.526 0-5 1.649-5 4.15h2Zm3-2.15c1.893 0 3 1.172 3 2.15h2c0-2.501-2.474-4.15-5-4.15v2Zm3 8.45c0 .978-1.107 2.15-3 2.15v2c2.526 0 5-1.649 5-4.15h-2Zm-3 2.15c-1.893 0-3-1.172-3-2.15H7c0 2.501 2.474 4.15 5 4.15v-2Zm1-11.6V3h-2v2.7h2Zm-2 12.6V21h2v-2.7h-2Z"
        fill="#555770"
      />
    </g>
  </svg>
);

export default SvgDollarCrossed;
