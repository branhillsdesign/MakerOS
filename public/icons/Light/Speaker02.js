import * as React from "react";

const SvgSpeaker02 = ({ title, titleId, ...props }) => (
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
      strokeWidth={1.2}
    />
    <mask
      id="Speaker_02_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={12}
      y={0}
      width={9}
      height={24}
    >
      <path fill="#fff" d="M12.247 0H21v24h-8.753z" />
    </mask>
    <g mask="url(#Speaker_02_svg__a)">
      <circle cx={10.5} cy={12.5} r={5.9} stroke="#555770" strokeWidth={1.2} />
    </g>
  </svg>
);

export default SvgSpeaker02;
