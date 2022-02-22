import * as React from "react";

const SvgEyeWarning = ({ title, titleId, ...props }) => (
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
    <path d="M19 8v7m0 4v-2" stroke="#555770" strokeWidth={2} />
    <mask
      id="Eye_Warning_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={16}
      height={24}
    >
      <path d="M0 0h16v24H0V0Z" fill="#fff" />
    </mask>
    <g mask="url(#Eye_Warning_svg__a)" strokeWidth={2}>
      <circle cx={12} cy={12} r={3} stroke="currentColor" />
      <path
        d="M12 18c-4.548 0-8.367-2.526-9.916-6C3.633 8.526 7.452 6 12 6s8.367 2.526 9.916 6c-1.549 3.474-5.368 6-9.916 6Z"
        stroke="#555770"
      />
    </g>
  </svg>
);

export default SvgEyeWarning;
