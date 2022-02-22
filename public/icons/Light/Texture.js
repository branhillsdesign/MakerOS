import * as React from "react";

const SvgTexture = ({ title, titleId, ...props }) => (
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
      id="Texture_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={3}
      y={3}
      width={18}
      height={18}
    >
      <rect x={3} y={3} width={18} height={18} rx={3} fill="#fff" />
    </mask>
    <g mask="url(#Texture_svg__a)">
      <path
        d="M22 2 2 22M14.5 2 2 14.5M22 10 10 22M6.5 2 2 6.5m20 11L17.5 22"
        stroke="#555770"
        strokeWidth={1.2}
      />
    </g>
  </svg>
);

export default SvgTexture;
