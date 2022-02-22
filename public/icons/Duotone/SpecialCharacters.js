import * as React from "react";

const SvgSpecialCharacters = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#Special_Characters_svg__a)">
      <path
        d="M6.5 6V5l-.707 1.707L6.5 6Zm6.5 6.5.707.707.707-.707-.707-.707L13 12.5ZM6.5 19l-.707-.707L6.5 20v-1ZM18 5H6.5v2H18V5ZM5.793 6.707l6.5 6.5 1.414-1.414-6.5-6.5-1.414 1.414Zm6.5 5.086-6.5 6.5 1.414 1.414 6.5-6.5-1.414-1.414ZM6.5 20H18v-2H6.5v2Z"
        fill="#555770"
      />
      <mask
        id="Special_Characters_svg__b"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={1}
        y={12}
        width={22}
        height={12}
      >
        <path
          transform="rotate(90 23 12.51)"
          fill="#000"
          d="M23 12.509h11.491v22H23z"
        />
      </mask>
      <g mask="url(#Special_Characters_svg__b)">
        <path
          d="M6.5 6V5l-.707 1.707L6.5 6Zm6.5 6.5.707.707.707-.707-.707-.707L13 12.5ZM6.5 19l-.707-.707L6.5 20v-1ZM18 5H6.5v2H18V5ZM5.793 6.707l6.5 6.5 1.414-1.414-6.5-6.5-1.414 1.414Zm6.5 5.086-6.5 6.5 1.414 1.414 6.5-6.5-1.414-1.414ZM6.5 20H18v-2H6.5v2Z"
          fill="currentColor"
        />
      </g>
    </g>
    <defs>
      <clipPath id="Special_Characters_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgSpecialCharacters;
