import * as React from "react";

const SvgGym = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#Gym_svg__a)">
      <path
        d="M5.647 5.647 8.475 2.82 9.887 4.23m-4.24 1.417L2.82 8.476 4.23 9.887m1.417-4.24L3.515 3.515m14.838 14.838 2.828-2.829-1.411-1.411m-1.417 4.24-2.829 2.828-1.411-1.411m4.24-1.417 2.132 2.132M9.887 4.23l1.414-1.414 1.397 1.397-4.242 4.243-4.243 4.243L2.816 11.3 4.23 9.887M9.887 4.23 7.06 7.06 4.23 9.887m15.54 4.226L16.94 16.94l-2.828 2.829m5.657-5.657 1.414-1.414-1.414-1.415-4.243 4.243m-1.414 4.243-1.415 1.414-1.414-1.414 4.243-4.243m0 0L8.475 8.476"
        stroke="#555770"
        strokeWidth={1.2}
      />
    </g>
    <defs>
      <clipPath id="Gym_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgGym;
