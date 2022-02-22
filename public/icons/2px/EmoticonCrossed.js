import * as React from "react";

const SvgEmoticonCrossed = ({ title, titleId, ...props }) => (
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
      id="Emoticon_Crossed_svg__a"
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
    <g mask="url(#Emoticon_Crossed_svg__a)" stroke="#555770" strokeWidth={2}>
      <path d="m3.524 4.942 15.5 15.5" />
      <circle cx={12} cy={12} r={9} />
      <path d="M7 14c.998 1.793 2.863 3 5 3 1.71 0 3.245-.773 4.302-2M9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
    </g>
  </svg>
);

export default SvgEmoticonCrossed;
