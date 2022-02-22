import * as React from "react";

const SvgLinkCrossed = ({ title, titleId, ...props }) => (
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
      id="Link_Crossed_svg__a"
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
    <g mask="url(#Link_Crossed_svg__a)" strokeWidth={2}>
      <path d="m15.536 8.464-7.071 7.072" stroke="currentColor" />
      <path
        d="m16.243 13.414 2.828-2.828a4 4 0 0 0-5.657-5.657l-2.828 2.828m2.828 8.486-2.828 2.828a4 4 0 1 1-5.657-5.657l2.828-2.828M3.524 4.942l15.5 15.5"
        stroke="#555770"
      />
    </g>
  </svg>
);

export default SvgLinkCrossed;
