import * as React from "react";

const SvgCameraCrossed = ({ title, titleId, ...props }) => (
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
      id="Camera_Crossed_svg__a"
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
        d="M21.503 21.5.003 0 0 24h24V0H5.698v2.866L23 20.168 21.503 21.5Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Camera_Crossed_svg__a)" strokeWidth={2}>
      <path
        d="m21.83 7.17-4.123 4.123a1 1 0 0 0 0 1.414l4.122 4.122a.1.1 0 0 0 .171-.07V7.24a.1.1 0 0 0-.17-.07Z"
        stroke="#555770"
      />
      <path
        d="M2 7a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7Z"
        stroke="currentColor"
      />
      <path d="m1.583 3 17.5 17.5" stroke="#555770" />
    </g>
  </svg>
);

export default SvgCameraCrossed;
