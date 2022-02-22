import * as React from "react";

const SvgHeart = ({ title, titleId, ...props }) => (
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
      d="M7 4a5 5 0 0 0-5 5c0 1.126.075 2.493 1.357 3.987C4.637 14.482 12 21 12 21s7.362-6.518 8.643-8.013C21.924 11.493 22 10.126 22 9a5 5 0 0 0-10 0 5 5 0 0 0-5-5Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <mask
      id="Heart_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={12}
      y={0}
      width={12}
      height={24}
    >
      <path fill="#000" d="M12 0h12v24H12z" />
    </mask>
    <g mask="url(#Heart_svg__a)">
      <path
        d="M7 4a5 5 0 0 0-5 5c0 1.126.075 2.493 1.357 3.987C4.637 14.482 12 21 12 21s7.362-6.518 8.643-8.013C21.924 11.493 22 10.126 22 9a5 5 0 0 0-10 0 5 5 0 0 0-5-5Z"
        stroke="currentColor"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgHeart;
