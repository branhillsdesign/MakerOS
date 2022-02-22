import * as React from "react";

const SvgMessageCrossed = ({ title, titleId, ...props }) => (
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
      id="Message_Crossed_svg__a"
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
        d="M19.784 19.78.004 0v3.997H0V24h24V0H5.698v2.866l15.5 15.5 2.72 2.72-1.415 1.414-2.72-2.72Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Message_Crossed_svg__a)" strokeWidth={2}>
      <path
        d="M4 4h16a1 1 0 0 1 1 1v14.792a.1.1 0 0 1-.163.078L17.25 17H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"
        stroke="currentColor"
      />
      <path d="M1.583 3 21 22.417" stroke="#555770" />
    </g>
  </svg>
);

export default SvgMessageCrossed;
