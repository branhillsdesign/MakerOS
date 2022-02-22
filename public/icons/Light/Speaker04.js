import * as React from "react";

const SvgSpeaker04 = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#Speaker_04_svg__a)">
      <path
        d="M3 14.9V9.1a.1.1 0 0 1 .1-.1h1.859a.1.1 0 0 0 .07-.03l4.8-4.8a.1.1 0 0 1 .171.071V19.76a.1.1 0 0 1-.17.07l-4.8-4.8A.1.1 0 0 0 4.958 15H3.1a.1.1 0 0 1-.1-.1Z"
        stroke="#555770"
        strokeWidth={1.2}
      />
      <mask
        id="Speaker_04_svg__b"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={12}
        y={0}
        width={9}
        height={24}
      >
        <path fill="#fff" d="M12.248 0H21v24h-8.752z" />
      </mask>
      <g mask="url(#Speaker_04_svg__b)">
        <path d="M20 6 8 18m12 0L8 6" stroke="#555770" strokeWidth={1.2} />
      </g>
    </g>
    <defs>
      <clipPath id="Speaker_04_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgSpeaker04;
