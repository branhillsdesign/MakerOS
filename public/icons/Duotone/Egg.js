import * as React from "react";

const SvgEgg = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#Egg_svg__a)">
      <path
        d="M18 15a6 6 0 0 1-12 0c0-3.314 1.5-10.5 6-10.5s6 7.186 6 10.5Z"
        stroke="#555770"
        strokeWidth={2}
      />
      <mask
        id="Egg_svg__b"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={12}
        y={0}
        width={12}
        height={26}
      >
        <path fill="#000" d="M12.004 0H24v25.181H12.004z" />
      </mask>
      <g mask="url(#Egg_svg__b)">
        <path
          d="M18 15a6 6 0 0 1-12 0c0-3.314 1.5-10.5 6-10.5s6 7.186 6 10.5Z"
          stroke="currentColor"
          strokeWidth={2}
        />
      </g>
    </g>
    <defs>
      <clipPath id="Egg_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgEgg;
