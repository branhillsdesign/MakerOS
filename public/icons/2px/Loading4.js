import * as React from "react";

const SvgLoading4 = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#Loading_4_svg__a)">
      <mask
        id="Loading_4_svg__b"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={24}
        height={24}
      >
        <path d="M12 0v6h-2V0H0v24h12v-6h2v6h10V0H12Z" fill="#fff" />
      </mask>
      <g mask="url(#Loading_4_svg__b)">
        <circle
          cx={12}
          cy={12}
          r={8}
          transform="rotate(90 12 12)"
          stroke="#555770"
          strokeWidth={2}
        />
        <path d="M14 14v7h7l-7-7ZM10 10V3H3l7 7Z" fill="#555770" />
      </g>
    </g>
    <defs>
      <clipPath id="Loading_4_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgLoading4;
