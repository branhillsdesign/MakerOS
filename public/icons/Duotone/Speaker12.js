import * as React from "react";

const SvgSpeaker12 = ({ title, titleId, ...props }) => (
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
      d="M3 14.9V9.1a.1.1 0 0 1 .1-.1h1.859a.1.1 0 0 0 .07-.03l4.8-4.8a.1.1 0 0 1 .171.071V19.76a.1.1 0 0 1-.17.07l-4.8-4.8A.1.1 0 0 0 4.958 15H3.1a.1.1 0 0 1-.1-.1Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <mask
      id="Speaker_12_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={1}
      y={12}
      width={11}
      height={10}
    >
      <path transform="rotate(-90 1 22)" fill="#000" d="M1 22h10v11H1z" />
    </mask>
    <g mask="url(#Speaker_12_svg__a)">
      <path
        d="M3 14.9V9.1a.1.1 0 0 1 .1-.1h1.859a.1.1 0 0 0 .07-.03l4.8-4.8a.1.1 0 0 1 .171.071V19.76a.1.1 0 0 1-.17.07l-4.8-4.8A.1.1 0 0 0 4.958 15H3.1a.1.1 0 0 1-.1-.1Z"
        stroke="currentColor"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgSpeaker12;
