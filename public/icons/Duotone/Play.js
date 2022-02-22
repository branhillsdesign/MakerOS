import * as React from "react";

const SvgPlay = ({ title, titleId, ...props }) => (
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
    <path
      d="M18.243 12 8 4.909V19.09L18.243 12Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <mask
      id="Play_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={6}
      y={12}
      width={15}
      height={10}
    >
      <path transform="rotate(-90 6 22)" fill="#000" d="M6 22h10v15H6z" />
    </mask>
    <g mask="url(#Play_svg__a)">
      <path
        d="M18.243 12 8 4.909V19.09L18.243 12Z"
        stroke="currentColor"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgPlay;
