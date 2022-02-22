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
    <g clipPath="url(#Gym_svg__a)" strokeWidth={2}>
      <path d="m7.059 7.059 9.882 9.882" stroke="currentColor" />
      <path
        d="M11.301 2.816 7.06 7.06m0 0L2.816 11.3M7.06 7.06 5.647 5.647M8.475 2.82 5.647 5.647m0 0L2.82 8.476m2.828-2.829L3.515 3.515m17.669 9.184L16.94 16.94m0 0L12.7 21.184m4.242-4.243 1.412 1.412m2.828-2.829-2.828 2.829m0 0-2.829 2.828m2.829-2.828 2.132 2.132"
        stroke="#555770"
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
