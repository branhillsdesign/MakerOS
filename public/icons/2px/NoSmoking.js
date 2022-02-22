import * as React from "react";

const SvgNoSmoking = ({ title, titleId, ...props }) => (
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
      id="No_Smoking_svg__a"
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
    <g mask="url(#No_Smoking_svg__a)">
      <path
        d="m3.524 4.942 15.5 15.5M3 14v-1h13v1H3Z"
        stroke="#555770"
        strokeWidth={2}
      />
      <path
        d="M18.25 12v3h1.5v-3h-1.5Zm2.5 0v3h1.5v-3h-1.5Zm1.5-1V9h-1.5v2h1.5Zm0-2a5.75 5.75 0 0 0-5.75-5.75v1.5A4.25 4.25 0 0 1 20.75 9h1.5ZM16.5 4.75h.25v-1.5h-.25v1.5Zm.25 0a3.5 3.5 0 0 0 3.5-3.5h-1.5a2 2 0 0 1-2 2v1.5Zm3 6.25v-1h-1.5v1h1.5ZM16 6.25h-1.5v1.5H16v-1.5ZM12.75 4.5c0-.966.784-1.75 1.75-1.75v-1.5a3.25 3.25 0 0 0-3.25 3.25h1.5Zm1.75 1.75a1.75 1.75 0 0 1-1.75-1.75h-1.5a3.25 3.25 0 0 0 3.25 3.25v-1.5ZM19.75 10A3.75 3.75 0 0 0 16 6.25v1.5A2.25 2.25 0 0 1 18.25 10h1.5Z"
        fill="#555770"
      />
    </g>
  </svg>
);

export default SvgNoSmoking;
