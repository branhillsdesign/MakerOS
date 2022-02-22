import * as React from "react";

const SvgMicrophoneCrossed = ({ title, titleId, ...props }) => (
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
      id="Microphone_Crossed_svg__a"
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
    <g mask="url(#Microphone_Crossed_svg__a)" strokeWidth={2}>
      <path
        d="M12 23v-3.454m0 0c-3.866 0-7-2.931-7-6.546m7 6.546c3.866 0 7-2.931 7-6.546"
        stroke="#555770"
      />
      <path d="M9 6a3 3 0 1 1 6 0v6a3 3 0 1 1-6 0V6Z" stroke="currentColor" />
      <path d="m3.524 4.942 15.5 15.5" stroke="#555770" />
    </g>
  </svg>
);

export default SvgMicrophoneCrossed;
