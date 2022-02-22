import * as React from "react";

const SvgMoon = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#Moon_svg__a)">
      <path
        d="M12 22C6.477 22 2 17.523 2 12a9.997 9.997 0 0 1 5.109-8.724.17.17 0 0 1 .004.07A12.097 12.097 0 0 0 7 5c0 6.627 5.373 12 12 12 .56 0 1.113-.039 1.655-.113a.17.17 0 0 1 .07.004A9.997 9.997 0 0 1 12 22Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <mask
        id="Moon_svg__b"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={4}
        y={8}
        width={21}
        height={21}
      >
        <path
          transform="rotate(45 15.594 8.414)"
          fill="#000"
          d="M15.594 8.414h12v16.34h-12z"
        />
      </mask>
      <g mask="url(#Moon_svg__b)">
        <path
          d="M12 22C6.477 22 2 17.523 2 12a9.997 9.997 0 0 1 5.109-8.724.17.17 0 0 1 .004.07A12.097 12.097 0 0 0 7 5c0 6.627 5.373 12 12 12 .56 0 1.113-.039 1.655-.113a.17.17 0 0 1 .07.004A9.997 9.997 0 0 1 12 22Z"
          stroke="#555770"
          strokeWidth={2}
          strokeLinejoin="round"
        />
      </g>
    </g>
    <defs>
      <clipPath id="Moon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgMoon;
